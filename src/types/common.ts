export type MemoId = string;

export interface IMemo {
  id: MemoId;
  createdAt: string;
  updatedAt: string;
  body: string;
}

export type Memo = {
  id: MemoId;
  createdAt: Date;
  updatedAt: Date;
  body: string;
};
