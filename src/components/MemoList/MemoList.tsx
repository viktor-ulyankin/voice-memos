import type { MouseEvent } from "react";
import { PREVIEW_MEMO_LENGTH } from "../../constants";
import type { Memo, MemoId } from "../../types/common";
import { getFormatedDate } from "../../utils/common";
import styles from "./MemoList.module.css";
import cn from "classnames";

type Props = {
  list: Memo[];
  activeId: MemoId | null;
  onSelect: (id: MemoId | null) => void;
};

export const MemoList = ({ list, activeId, onSelect }: Props) => {
  const handleSelect = (e: MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.dataset.id;

    onSelect(id || null);
  };

  return (
    <ul className={styles.list}>
      {list.map(({ id, body, updatedAt }) => {
        return (
          <li className={styles.item} key={id}>
            <button
              className={cn(
                styles.itemButton,
                id === activeId && styles.active
              )}
              onClick={handleSelect}
              data-id={id}
            >
              <span className={styles.date}>{getFormatedDate(updatedAt)}</span>

              <span className={styles.content}>
                {body.length ? body.slice(0, PREVIEW_MEMO_LENGTH) : "New Memo"}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};
