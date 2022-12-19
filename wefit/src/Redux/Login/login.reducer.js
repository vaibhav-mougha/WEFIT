import {
  ADMIN_LOGIN_ERROR,
  ADMIN_LOGIN_FAILED,
  ADMIN_LOGIN_SUCCESS,
  CREATE_ACCOUNT,
  LOGOUT,
  USER_LOGIN_ERROR,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
} from "./login.actionTypes";

const loginUserName = localStorage.getItem("loginUserName") || "";
const loginAdminName = localStorage.getItem("loginAdminName") || "";

const initState = {
  user: {
    userStatus: false,
    userName: loginUserName,
    failed: false,
    isError: false,
    createAccount: false,
  },
  admin: {
    adminStatus: false,
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
          userStatus: true,
          userName: payload,
          failed: false,
          isError: false,
          createAccount: false,
        },
        admin: {
          adminStatus: false,
          adminName: "",
          failed: false,
          isError: false,
        },
      };
    }
    case USER_LOGIN_FAILED: {
      return {
        ...state,
        user: {
          userStatus: false,
          userName: "",
          failed: true,
          isError: false,
          createAccount: false,
        },
        admin: {
          adminStatus: false,
          adminName: "",
          failed: false,
          isError: false,
        },
      };
    }
    case CREATE_ACCOUNT: {
      return {
        ...state,
        user: {
          userStatus: false,
          userName: "",
          failed: false,
          isError: false,
          createAccount: true,
        },
        admin: {
          adminStatus: false,
          adminName: "",
          failed: false,
          isError: false,
        },
      };
    }
    case USER_LOGIN_ERROR: {
      return {
        ...state,
        user: {
          userStatus: false,
          userName: "",
          failed: false,
          isError: true,
          createAccount: false,
        },
        admin: {
          adminStatus: false,
          adminName: "",
          failed: false,
          isError: false,
        },
      };
    }
    case ADMIN_LOGIN_SUCCESS: {
      localStorage.setItem("loginAdminName", payload);
      return {
        ...state,
        admin: {
          adminStatus: true,
          adminName: payload,
          failed: false,
          isError: false,
        },
        user: {
          userStatus: false,
          userName: "",
          failed: false,
          isError: false,
          createAccount: false,
        },
      };
    }
    case ADMIN_LOGIN_FAILED: {
      return {
        ...state,
        admin: {
          adminStatus: false,
          adminName: "",
          failed: true,
          isError: false,
        },
        user: {
          userStatus: false,
          userName: "",
          failed: false,
          isError: false,
          createAccount: false,
        },
      };
    }
    case ADMIN_LOGIN_ERROR: {
      return {
        ...state,
        admin: {
          adminStatus: false,
          adminName: "",
          failed: false,
          isError: true,
        },
        user: {
          userStatus: false,
          userName: "",
          failed: false,
          isError: false,
          createAccount: false,
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
