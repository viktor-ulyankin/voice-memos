import { LS_KEY } from "../constants";
import type { Memo, MemoId } from "../types/domain";
import { v4 as uuidv4 } from "uuid";
import { ls } from "../utils/localStorage";
import type { MemoDTO } from "../types/api";
import { memoTransformers } from "../utils/memo";

export const memoService = {
  getAllMemos(): Memo[] {
    const serializedMemos = ls.get<MemoDTO[]>(LS_KEY.MEMOS);

    if (!serializedMemos) return [];

    const memos = serializedMemos.map(memoTransformers.deserialize);

    return this.sortMemosByUpdatedDate(memos);
  },

  saveAllMemos(memos: Memo[]): boolean {
    const serializedMemos = memos.map(memoTransformers.serialize);
    return ls.set(LS_KEY.MEMOS, serializedMemos);
  },

  createEmptyMemo(): Memo {
    const now = new Date();
    return {
      id: uuidv4(),
      createdAt: now,
      updatedAt: now,
      body: "",
    };
  },

  findMemoById(memos: Memo[], id: MemoId): Memo | undefined {
    return memos.find((memo) => memo.id === id);
  },

  updateMemoInList(memos: Memo[], id: MemoId, body: string): Memo[] {
    const updated = memos.map((memo) =>
      memo.id === id ? { ...memo, body, updatedAt: new Date() } : memo
    );

    return this.sortMemosByUpdatedDate(updated);
  },

  removeMemoFromList(memos: Memo[], id: MemoId): Memo[] {
    return memos.filter((memo) => memo.id !== id);
  },

  sortMemosByUpdatedDate(memos: Memo[]): Memo[] {
    return [...memos].sort(
      (a, b) => b.updatedAt.getTime() - a.updatedAt.getTime()
    );
  },
};
