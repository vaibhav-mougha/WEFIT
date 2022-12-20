import {
  ADMIN_LOADING_EXERCISE,
  ADMIN_ADD__EXERCISE,
  ADMIN_DELETE_EXERCISE,
  ADMIN_ERROR_EXERCISE,
} from "./admin.actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  excercise: [],
};

const adminReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADMIN_LOADING_EXERCISE: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ADMIN_ADD__EXERCISE: {
      return {
        ...state,
        isLoading: false,
        excercise: [...state.todos, payload],
      };
    }
    case ADMIN_DELETE_EXERCISE: {
      const deletedExcercise = state.excercise.filter(
        (excer) => excer.id !== payload
      );
      return {
        ...state,
        excercise: deletedExcercise,
      };
    }
    case ADMIN_ERROR_EXERCISE: {
      return {
        ...state,
        iserror: true
      };
    }
    default:
      return state;
  }
};

export default adminReducer;
