import axios from "axios";
import {
  ADMIN_ADD__EXERCISE,
  ADMIN_DELETE_EXERCISE,
  ADMIN_ERROR_EXERCISE,
  ADMIN_LOADING_EXERCISE,
} from "./admin.actionTypes";

export const adminAddExercise = (creds) => async (dispatch) => {
  dispatch({ type: ADMIN_LOADING_EXERCISE });
  try {
    let res = await axios.post("https://we-fit-database-api.vercel.app/exercise", creds);
    dispatch({ type: ADMIN_ADD__EXERCISE, payload: res.data });
  } catch (error) {
    dispatch({ type: ADMIN_ERROR_EXERCISE, payload: error.message });
  }
};

export const adminDeleteExercise = (id) => async (dispatch) => {
  dispatch({ type: ADMIN_LOADING_EXERCISE });
  try {
    let res = await axios.delete(`https://we-fit-database-api.vercel.app/exercise/${id}`);
    dispatch({ type: ADMIN_DELETE_EXERCISE, payload: id });
  } catch (error) {
    dispatch({ type: ADMIN_ERROR_EXERCISE, payload: error.message });
  }
};
