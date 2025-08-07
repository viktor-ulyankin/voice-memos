import { useState, useCallback, useEffect, useMemo } from "react";
import { showError } from "../utils/common";
import type { Memo, MemoId } from "../types/domain";
import { memoService } from "../services/memoService";

export function useMemoManager() {
  const [memos, setMemos] = useState<Memo[]>([]);
  const [activeMemoId, setActiveMemoId] = useState<MemoId | null>(null);

  useEffect(() => {
    const loadedMemos = memoService.getAllMemos();

    setMemos(loadedMemos);
  }, []);

  const activeMemo = useMemo(() => {
    return activeMemoId
      ? memoService.findMemoById(memos, activeMemoId) || null
      : null;
  }, [memos, activeMemoId]);

  const addMemo = useCallback((): MemoId | null => {
    const newMemo = memoService.createEmptyMemo();
    const updatedMemos = [newMemo, ...memos];

    if (memoService.saveAllMemos(updatedMemos)) {
      setMemos(updatedMemos);

      return newMemo.id;
    }

    showError("Failed to save memo");

    return null;
  }, [memos]);

  const updateMemo = useCallback(
    (id: MemoId, body: string): boolean => {
      const updatedMemos = memoService.updateMemoInList(memos, id, body);

      if (memoService.saveAllMemos(updatedMemos)) {
        setMemos(updatedMemos);

        return true;
      }

      showError("Failed to save memo");

      return false;
    },
    [memos]
  );

  const deleteMemo = useCallback(
    (id: MemoId): boolean => {
      const updatedMemos = memoService.removeMemoFromList(memos, id);

      if (memoService.saveAllMemos(updatedMemos)) {
        setMemos(updatedMemos);

        if (activeMemoId === id) {
          setActiveMemoId(null);
        }

        return true;
      }

      showError("Failed to delete memo");

      return false;
    },
    [memos, activeMemoId]
  );

  return {
    memos,
    activeMemo,
    activeMemoId,
    setActiveMemoId,
    addMemo,
    updateMemo,
    deleteMemo,
  };
}
