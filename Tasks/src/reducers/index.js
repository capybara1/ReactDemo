//@flow

import { combineReducers } from "redux";
import type { Reducer } from "redux";

import type { State } from "../shared/types";
import unspecificReducer from "./unspecificReducer";
import isLoadingReducer from "./isLoadingReducer";
import categoriesReducer from "./categoriesReducer";
import templatesReducer from "./templatesReducer";
import tasksReducer from "./tasksReducer";
import notificationReducer from "./notificationReducer";

const initialState: State = {
  categories: [],
  templates: [],
  tasks: [],
  isLoading: false,
  notification: null
};

const combinedSpecificReducers: Reducer<State> = combineReducers({
  isLoading: isLoadingReducer,
  categories: categoriesReducer,
  templates: templatesReducer,
  tasks: tasksReducer,
  notification: notificationReducer
});

const combinedReducers: Reducer<State> = (state = initialState, action) => {
  return unspecificReducer(combinedSpecificReducers(state, action), action);
};

export default combinedReducers;
