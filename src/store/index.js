import { combineReducers } from "redux";
import results from "./results";
import questions from "./questions";

export default combineReducers({
  questions,
  results
});
