import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Main.module.css";
import { AUTO_SAVE_DELAY } from "../../constants";

import { showError } from "../../utils/common";
import { useFunctionDebounce } from "../../hooks/useFunctionDebounce";
import AddMemoButton from "../AddMemoButton";
import Header from "../Header";
import MemoList from "../MemoList";
import Editor from "../Editor";
import type { MemoId } from "../../types/domain";
import { useMemoManager } from "../../hooks/useMemoManager";

export const Main = () => {
  const [body, setBody] = useState("");
  const [isBodyChanged, setIsBodyChanged] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const {
    memos,
    activeMemo,
    activeMemoId,
    setActiveMemoId,
    addMemo,
    updateMemo,
    deleteMemo,
  } = useMemoManager();

  // Sync body with active memo
  useEffect(() => {
    if (activeMemo) {
      setBody(activeMemo.body);
      textareaRef.current?.focus();
    }
  }, [activeMemo, setBody]);

  const handleMemoSelect = useCallback(
    (id: MemoId | null) => {
      if (id) {
        // Save changes before change an active memo
        if (isBodyChanged && activeMemo) {
          updateMemo(activeMemo.id, body);
          setIsBodyChanged(false);
        }

        setActiveMemoId(id);
      } else {
        showError("The memo was not found!");
      }
    },
    [isBodyChanged, activeMemo, body, updateMemo, setActiveMemoId]
  );

  const handleMemoAdd = () => {
    const newMemoId = addMemo();

    if (newMemoId) {
      setActiveMemoId(newMemoId);
    }
  };

  const handleMemoRemove = () => {
    if (activeMemoId) {
      let isConfirm = confirm("Delete the memo?");

      if (isConfirm) {
        deleteMemo(activeMemoId);
      }
    }
  };

  const debouncedUpdateMemo = useFunctionDebounce((value: string) => {
    if (activeMemo && isBodyChanged) {
      updateMemo(activeMemo.id, value);
      setIsBodyChanged(false);
    }
  }, AUTO_SAVE_DELAY);

  const handleTextareaChange = useCallback(
    (value: string) => {
      setIsBodyChanged(true);
      setBody(value);
      debouncedUpdateMemo(value);
    },
    [debouncedUpdateMemo, setBody, setIsBodyChanged]
  );

  return (
    <main className={styles.main}>
      <Header />

      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <AddMemoButton className={styles.control} onClick={handleMemoAdd} />

          <MemoList
            list={memos}
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
