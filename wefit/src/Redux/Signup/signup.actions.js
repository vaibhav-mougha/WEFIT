import axios from "axios";
import { SIGNUP_FAILED, SIGNUP_SUCCESS } from "./signup.actionTypes";

export const signup = (creds) => async (dispatch) => {
  try {
    let res = await axios.post(" http://localhost:8080/userData", creds);
    dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({type: SIGNUP_FAILED});
  }
};
