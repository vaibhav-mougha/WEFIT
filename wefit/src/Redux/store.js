import {
  legacy_createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import loginReducer from "./Login/login.reducer";
import signupReducer from "./Signup/signup.reducer";

const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer,
});

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composerEnhancer(applyMiddleware(thunk))
);
