import { createStore, combineReducers } from "redux";
import { peopleReducer as people } from "./reducers";

export const store = createStore(combineReducers({ people }));
