import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  peopleReducer as people,
  chatReducer as chat,
  tasksReducer as tasks,
} from "./reducers";

export const store = createStore(
  combineReducers({ people, chat, tasks }),
  applyMiddleware(thunk)
);
