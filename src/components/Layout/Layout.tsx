import { useEffect, useRef, useState } from "react";
import styles from "./Layout.module.css";
import { AUTO_SAVE_DELAY } from "../../constants";

import type { Memo, MemoId } from "../../types/common";
import { showError } from "../../utils/common";
import {
  addMemo,
  getMemoList,
  matchMemoById,
  removeMemo,
  updateMemo,
} from "../../utils/memo";
import { useFunctionDebounce } from "../../hooks/useFunctionDebounce";
import AddMemoButton from "../AddMemoButton";
import Header from "../Header";
import MemoList from "../MemoList";
import Editor from "../Editor";

export const Layout = () => {
  const [memoList, setMemoList] = useState<Memo[]>([]);
  const [activeMemoId, setActiveMemoId] = useState<MemoId | null>(null);
  const [activeMemo, setActiveMemo] = useState<Memo | null>(null);
  const [body, setBody] = useState("");
  const [isBodyChanged, setIsBodyChanged] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const uddateMemoList = () => {
    const newMemos = getMemoList();

    setMemoList(newMemos);
  };

  useEffect(() => {
    uddateMemoList();
  }, []);

  useEffect(() => {
    if (activeMemoId) {
      const foundMemo = memoList.find(matchMemoById(activeMemoId)) || null;

      setActiveMemo(foundMemo);
    } else {
      setActiveMemo(null);
    }
  }, [activeMemoId]);

  useEffect(() => {
    if (activeMemo) {
      setBody(activeMemo.body);
      textareaRef.current?.focus();
    }
  }, [activeMemo]);

  const handleMemoSelect = (id: MemoId | null) => {
    if (id) {
      // When a user selects another memo, we need to update the last memo,
      // only if a body of the last memo was changed.
      // That's why we need the body state.
      if (isBodyChanged && activeMemo) {
        updateMemo(activeMemo.id, body);
        uddateMemoList();
        setIsBodyChanged(false);
      }

      setActiveMemoId(id);
    } else {
      showError("The memo was not found!");
    }
  };

  const handleMemoAdd = () => {
    const newMemoId = addMemo("");

    if (newMemoId) {
      uddateMemoList();
      setActiveMemoId(newMemoId);
    } else {
      showError("The memo was not added!");
    }
  };

  const handleMemoRemove = () => {
    if (activeMemoId) {
      let isConfirm = confirm("Delete the memo?");

      if (isConfirm) {
        const isSuccess = removeMemo(activeMemoId);

        if (isSuccess) {
          uddateMemoList();
          setActiveMemoId(null);
        } else {
          showError("The memo was not deleted!");
        }
      }
    } else {
      showError("The memo was not found!");
    }
  };

  const debouncedUpdateMemo = useFunctionDebounce((value: string) => {
    if (activeMemo && isBodyChanged) {
      updateMemo(activeMemo.id, value);
      uddateMemoList();
      setIsBodyChanged(false);
    }
  }, AUTO_SAVE_DELAY);

  const handleTextareaChange = (value: string) => {
    setIsBodyChanged(true);
    setBody(value);
    debouncedUpdateMemo(value);
  };

  return (
    <main className={styles.main}>
      <Header />

      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <AddMemoButton className={styles.control} onClick={handleMemoAdd} />

          <MemoList
            list={memoList}
            activeId={activeMemoId}
            onSelect={handleMemoSelect}
          />
        </aside>

        <section className={styles.content}>
          {activeMemo ? (
            <Editor
              initialValue={activeMemo.body}
              onChange={handleTextareaChange}
              onRemove={handleMemoRemove}
              textareaRef={textareaRef}
              isStatusSaving={isBodyChanged}
              date={activeMemo.updatedAt}
            />
          ) : (
            <AddMemoButton onClick={handleMemoAdd} />
          )}
        </section>
      </div>
    </main>
  );
};
