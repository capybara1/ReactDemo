//@flow

import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  ADD_TASK,
  SET_LABEL,
  SET_DUE,
  REMOVE_TASK,
  APPLY_CATEGORY,
  GENERATE_OUTPUT
} from "./actionTypes";
import type {
  FetchDataBeginAction,
  FetchDataSuccessAction,
  FetchDataFailureAction,
  AddTaskAction,
  SetLabelAction,
  SetDueAction,
  RemoveTaskAction,
  ApplyCategoryAction,
  GenerateOutputAction,
  ThunkAction
} from "./types";

export function fetchData(): ThunkAction {
  return dispatch => {
    dispatch(fetchDataBegin());
    return fetch("/data.json")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchDataSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchDataFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchDataBegin: () => FetchDataBeginAction = () => ({
  type: FETCH_DATA_BEGIN
});

export const fetchDataSuccess: any => FetchDataSuccessAction = payload => ({
  type: FETCH_DATA_SUCCESS,
  payload
});

export const fetchDataFailure: Error => FetchDataFailureAction = error => ({
  type: FETCH_DATA_FAILURE,
  error
});

export const addTask: (label?: string) => AddTaskAction = (label = "") => ({
  type: ADD_TASK,
  label
});

export const setLabel: (string, string) => SetLabelAction = (id, label) => ({
  type: SET_LABEL,
  id,
  label
});

export const setDue: (string, string) => SetDueAction = (id, due) => ({
  type: SET_DUE,
  id,
  due
});

export const removeTask: string => RemoveTaskAction = id => ({
  type: REMOVE_TASK,
  id
});

export const applyCategory: string => ApplyCategoryAction = id => ({
  type: APPLY_CATEGORY,
  id
});

export const generateOutput: () => GenerateOutputAction = () => ({
  type: GENERATE_OUTPUT
});
