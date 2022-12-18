import { SIGNUP_FAILED, SIGNUP_SUCCESS } from "./signup.actionTypes";

const initState = {
  isSignup: false,
  isError: false,
  data: null
};

const signupReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        isSignup: true,
        data: payload
      };
    }
    case SIGNUP_FAILED: {
      return {
        ...state,
        isError: true
      };
    }
    default:
      return state;
  }
};

export default signupReducer;
