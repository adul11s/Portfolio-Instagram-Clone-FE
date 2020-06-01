import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./reducer/loginReducer";
import postReducer from "./reducer/postReducer";
import followReducer from "./reducer/followReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  post: postReducer,
  follow: followReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.warn("cek state store", store.getState());
});
export default store;
