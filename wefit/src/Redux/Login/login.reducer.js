import {
    ADMIN_LOGIN_ERROR,
    ADMIN_LOGIN_FAILED,
    ADMIN_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
    USER_LOGIN_FAILED,
    USER_LOGIN_SUCCESS
  } from "./login.actionTypes";
  
  const initState = {
    user: {
      userStatus: false,
      userName: "",
      failed: false,
      isError: false
    },
    admin: {
      adminStatus: false,
      adminName: "",
      failed: false,
      isError: false
    }
  };
  
  const loginReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case USER_LOGIN_SUCCESS: {
        return {
          ...state,
          user: {
            ...state.user,
            userStatus: true,
            userName: payload
          }
        };
      }
      case USER_LOGIN_FAILED: {
        return {
          ...state,
          user: {
            ...state.user,
            failed: true
          }
        };
      }
      case USER_LOGIN_ERROR: {
        return {
          ...state,
          user: {
            ...state.user,
            isError: true
          }
        }
      }
      case ADMIN_LOGIN_SUCCESS: {
        return {
          ...state,
          admin: {
            ...state.admin,
            adminStatus: true,
            adminName: payload
          }
        };
      }
      case ADMIN_LOGIN_FAILED: {
        return {
          ...state,
          admin: {
            ...state.admin,
            failed: true
          }
        };
      }
      case ADMIN_LOGIN_ERROR: {
        return {
          ...state,
          admin: {
            ...state.admin,
            isError: true
          }
        };
      }
      default:
        return state;
    }
  };
  
  export default loginReducer;
  