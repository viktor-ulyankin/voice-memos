import { LS_KEY, MOCK_LIST } from "../../constants";
import { memoService } from "../../services/memoService";
import { ls } from "../../utils/localStorage";
import Main from "../Layout";

// Install mock data
const memoList = memoService.getAllMemos();
if (memoList.length === 0) {
  ls.set(LS_KEY.MEMOS, JSON.stringify(MOCK_LIST));
}

export const App = () => {
  return <Main />;
};
