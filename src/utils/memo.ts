import type { MemoDTO } from "../types/api";
import type { Memo } from "../types/domain";

export const memoTransformers = {
  serialize: (memo: Memo): MemoDTO => ({
    ...memo,
    createdAt: memo.createdAt.toISOString(),
    updatedAt: memo.updatedAt.toISOString(),
  }),

  deserialize: (serialized: MemoDTO): Memo => ({
    ...serialized,
    createdAt: new Date(serialized.createdAt),
    updatedAt: new Date(serialized.updatedAt),
  }),
};
