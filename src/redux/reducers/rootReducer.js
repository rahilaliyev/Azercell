import { combineReducers } from "redux";
import logReducer from "./logReducer";

export default combineReducers({
  login: logReducer,
});
