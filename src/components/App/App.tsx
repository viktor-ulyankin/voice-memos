import { LS_KEY, MOCK_LIST } from "../../constants";
import type { MemoDTO } from "../../types/api";
import { ls } from "../../utils/localStorage";
import Main from "../Layout";

// Install mock data
const memoList = ls.get<MemoDTO[]>(LS_KEY.MEMOS);
if (!memoList) ls.set(LS_KEY.MEMOS, MOCK_LIST);

export const App = () => {
  return <Main />;
};
