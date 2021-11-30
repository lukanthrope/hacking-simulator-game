import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { peopleReducer as people, chatReducer as chat } from "./reducers";

export const store = createStore(
  combineReducers({ people, chat }),
  applyMiddleware(thunk)
);
