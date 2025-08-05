import { LS_KEY } from "../constants";
import type { IMemo, Memo, MemoId } from "../types/common";
import { getIsoGlobalDate } from "./common";
import { ls } from "./localStorage";
import { v4 as uuidv4 } from "uuid";

export const matchMemoById =
  (targetId: string, opposite?: boolean) =>
  ({ id }: Memo) =>
    opposite ? id !== targetId : id === targetId;

export const getMemoList = () => {
  const lSMemoList = ls.get(LS_KEY.MEMOS) || "null";
  const memoList = (JSON.parse(lSMemoList) || []) as IMemo[];

  return memoList
    .map((memo) => ({
      ...memo,
      createdAt: new Date(memo.createdAt),
      updatedAt: new Date(memo.updatedAt),
    }))
    .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime()) as Memo[];
};

export const setMemoList = (memoList: Memo[]) => {
  const formatedMemoList = memoList.map((memo) => ({
    ...memo,
    createdAt: getIsoGlobalDate(memo.createdAt),
    updatedAt: getIsoGlobalDate(memo.updatedAt),
  }));

  return ls.set(LS_KEY.MEMOS, JSON.stringify(formatedMemoList));
};

export const addMemo = (body: string) => {
  const memoList = getMemoList();
  const newMemoList = memoList.map((memo) => ({ ...memo })) as Memo[];
  const id = uuidv4();

  newMemoList.push({
    id,
    body,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return (setMemoList(newMemoList) && id) || null;
};

export const updateMemo = (id: MemoId, body: string) => {
  const memoList = getMemoList();

  const newMemoList = memoList.map((memo) => {
    return {
      ...memo,
      body: memo.id === id ? body : memo.body,
      updatedAt: memo.id === id ? new Date() : memo.updatedAt,
    };
  }) as Memo[];

  return setMemoList(newMemoList);
};

export const removeMemo = (id: MemoId) => {
  const memoList = getMemoList();
  const newMemoList = memoList.filter(matchMemoById(id, true));

  if (newMemoList.length !== memoList.length) {
    return setMemoList(newMemoList);
  }

  return false;
};
