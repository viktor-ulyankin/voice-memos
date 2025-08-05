import { LS_KEY, MOCK_LIST } from "../../constants";
import { ls } from "../../utils/localStorage";
import { getMemoList } from "../../utils/memo";
import Layout from "../Layout";

// Setting mock data
const memoList = getMemoList();
if (memoList.length === 0) {
  ls.set(LS_KEY.MEMOS, JSON.stringify(MOCK_LIST));
}

export const App = () => {
  return <Layout />;
};
