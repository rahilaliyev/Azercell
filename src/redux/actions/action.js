import { LOG, REMOVE_LOG } from "./actionTypes";

export const logInOut = (log) => {
  return { type: LOG, log };
};

export const removeLog = () => {
  return { type: REMOVE_LOG };
};
