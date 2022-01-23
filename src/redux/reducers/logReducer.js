import { LOG, REMOVE_LOG } from "../actions/actionTypes";

const initialState = {
  data: false,
};

const logInOut = (state = initialState, action) => {
  switch (action.type) {
    case LOG:
      return {
        ...state,
        data: true,
      };
    case REMOVE_LOG:
      return {
        ...state,
        data: false,
      };
    default:
      return state;
  }
};

export default logInOut;
