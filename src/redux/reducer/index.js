import { combineReducers } from "redux";
import { changeTheNumber } from "./counter";

const reducers = combineReducers({
  changeTheNumber,
});

export default reducers;
