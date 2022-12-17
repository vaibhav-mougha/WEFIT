import axios from "axios";
import {
  ADMIN_LOGIN_ERROR,
  ADMIN_LOGIN_FAILED,
  ADMIN_LOGIN_SUCCESS,
  LOGOUT,
  USER_LOGIN_ERROR,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
} from "./login.actionTypes";

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    if (email.includes("admin") && password.includes("Admin")) {
      try {
        let adminRes = await axios.get("http://localhost:8080/adminData");
        if (
          adminRes.data.email === email &&
          adminRes.data.password === password
        ) {
          dispatch({
            type: ADMIN_LOGIN_SUCCESS,
            payload: adminRes.data.username,
          });
        } else {
          dispatch({ type: ADMIN_LOGIN_FAILED });
        }
      } catch (error) {
        dispatch({ type: ADMIN_LOGIN_ERROR });
      }
    } else {
      try {
        let userRes = await axios.get("http://localhost:8080/userData");
        let count = 0;

        for (let i = 0; i < userRes.data.length; i++) {
          if (
            userRes.data[i].email === email &&
            userRes.data[i].password === password
          ) {
            dispatch({
              type: USER_LOGIN_SUCCESS,
              payload: userRes.data[i].username,
            });
            // localStorage.setItem("loginUserName", userRes.data[i].username);
            return;
          } else {
            count++;
          }
          if (count === userRes.data.length) {
            dispatch({ type: USER_LOGIN_FAILED });
          }
        }
      } catch (error) {
        dispatch({ type: USER_LOGIN_ERROR });
      }
    }
  };

export const LogoutFunc = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
