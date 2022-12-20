import axios from "axios";
import {
  ADMIN_LOGIN_ERROR,
  ADMIN_LOGIN_FAILED,
  ADMIN_LOGIN_SUCCESS,
  CREATE_ACCOUNT,
  LOGOUT,
  USER_LOGIN_ERROR,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS
} from "./login.actionTypes";

export const login = ({ email, password }) => async (dispatch) => {
  if (email === "admin@wefit.com") {
    try {
      let adminRes = await axios.get("https://we-fit-database-api.vercel.app/adminData");
      if (
        adminRes.data.email === email &&
        adminRes.data.password === password
      ) {
        dispatch({
          type: ADMIN_LOGIN_SUCCESS,
          payload: adminRes.data.username
        });
      } else {
        dispatch({ type: ADMIN_LOGIN_FAILED });
      }
    } catch (error) {
      dispatch({ type: ADMIN_LOGIN_ERROR });
    }
  } else {
    try {
      let userRes = await axios.get("https://we-fit-database-api.vercel.app/userData");
      let count = 0;

      for (let i = 0; i < userRes.data.length; i++) {
        if (
          userRes.data[i].email === email &&
          userRes.data[i].password === password
        ) {
          dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: userRes.data[i].username
          });
          return;
        } else if (userRes.data[i].email === email) {
          if (userRes.data[i].password !== password) {
            dispatch({ type: USER_LOGIN_FAILED });
          }
        } else {
          count++;
        }
        if (count === userRes.data.length) {
          dispatch({ type: CREATE_ACCOUNT });
        }
      }
    } catch (error) {
      dispatch({ type: USER_LOGIN_ERROR });
    }
  }
};


export const logoutFunc = () => (dispatch) => {
  dispatch({type: LOGOUT})
}