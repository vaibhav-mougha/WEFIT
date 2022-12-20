import axios from "axios";
import { PROFILE_ADD, PROFILE_ERROR, PROFILE_GET } from "./profile.actionTypes";

export const addProfile = (creds) => async (dispatch) => {
  try {
    let res = await axios.post("https://we-fit-database-api.vercel.app/userProfile", creds);
    dispatch({ type: PROFILE_ADD, payload: res.data });
  } catch (error) {
    dispatch({ type: PROFILE_ERROR });
  }
};

export const getProfile = () => async (dispatch) => {
  try {
    let res = await axios("https://we-fit-database-api.vercel.app/userProfile");
    dispatch({ type: PROFILE_GET, payload: res.data });
  } catch (error) {
    dispatch({ type: PROFILE_ERROR });
  }
};
