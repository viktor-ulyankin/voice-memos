export type MemoId = string;

export type Memo = {
  id: MemoId;
  createdAt: Date;
  updatedAt: Date;
  body: string;
};
