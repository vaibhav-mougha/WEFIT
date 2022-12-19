import { PROFILE_ADD, PROFILE_ERROR, PROFILE_GET } from "./profile.actionTypes";

const initState = {
  isError: false,
  isAdd: false,
  data: null,
};

const profileReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case PROFILE_ADD: {
      return {
        ...state,
        isAdd: true,
      };
    }
    case PROFILE_ERROR: {
      return {
        ...state,
        isError: true,
      };
    }
    case PROFILE_GET: {
      return {
        ...state,
        data: payload,
      };
    }
    default:
      return state;
  }
};

export default profileReducer;
