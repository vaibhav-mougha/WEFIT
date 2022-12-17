import {
  ADMIN_LOGIN_ERROR,
  ADMIN_LOGIN_FAILED,
  ADMIN_LOGIN_SUCCESS,
  LOGOUT,
  USER_LOGIN_ERROR,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
} from "./login.actionTypes";

const loginUserName = localStorage.getItem("loginUserName") || "";
const loginAdminName = localStorage.getItem("loginAdminName") || "";

const initState = {
  user: {
    userStatus: !!loginUserName,
    userName: loginUserName,
    failed: false,
    isError: false,
  },
  admin: {
    adminStatus: !!loginAdminName,
    adminName: loginAdminName,
    failed: false,
    isError: false,
  },
};

const loginReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_SUCCESS: {
      localStorage.setItem("loginUserName", payload);
      return {
        ...state,
        user: {
          ...state.user,
          userStatus: true,
          userName: payload,
        },
      };
    }
    case USER_LOGIN_FAILED: {
      return {
        ...state,
        user: {
          ...state.user,
          failed: true,
        },
      };
    }
    case USER_LOGIN_ERROR: {
      return {
        ...state,
        user: {
          ...state.user,
          isError: true,
        },
      };
    }
    case ADMIN_LOGIN_SUCCESS: {
      localStorage.setItem("loginAdminName", payload);
      return {
        ...state,
        admin: {
          ...state.admin,
          adminStatus: true,
          adminName: payload,
        },
      };
    }
    case ADMIN_LOGIN_FAILED: {
      return {
        ...state,
        admin: {
          ...state.admin,
          failed: true,
        },
      };
    }
    case ADMIN_LOGIN_ERROR: {
      return {
        ...state,
        admin: {
          ...state.admin,
          isError: true,
        },
      };
    }
    case LOGOUT: {
      localStorage.removeItem("loginAdminName");
      localStorage.removeItem("loginUserName");
      return {
        ...state,
        user: {
          userStatus: false,
          userName: "",
          failed: false,
          isError: false,
        },
        admin: {
          adminStatus: false,
          adminName: "",
          failed: false,
          isError: false,
        },
      };
    }
    default:
      return state;
  }
};

export default loginReducer;
