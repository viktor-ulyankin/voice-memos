import type { MemoId } from "./domain";

export interface MemoDTO {
  id: MemoId;
  createdAt: string;
  updatedAt: string;
  body: string;
}
