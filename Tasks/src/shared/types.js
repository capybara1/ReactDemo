//@flow

import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  ADD_TASK,
  SET_LABEL,
  SET_DUE,
  REMOVE_TASK,
  NOTIFY_USER,
  APPLY_CATEGORY,
  GENERATE_OUTPUT
} from "./actionTypes";

export type Category = {
  id: string,
  label: string,
  tags: string[]
};

export type Template = {
  label: string,
  tags: string[]
};

export type Task = {
  id: string,
  label: string,
  due: string
};

export type TaskView = {
  label: string,
  due?: string
};

export type NotificationLevel = "info" | "warn" | "error";

export type UserNotification = {
  message: string,
  level: NotificationLevel
};

export type State = {
  categories: Category[],
  templates: Template[],
  tasks: Task[],
  isLoading: boolean,
  notification: ?UserNotification
};

type GetState = () => State;

type PromiseAction = Promise<Action>;

export type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Array<Action>
) => any;

export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;

export type FetchDataBeginAction = { type: FETCH_DATA_BEGIN };

export type FetchDataSuccessAction = { type: FETCH_DATA_SUCCESS, payload: any };

export type FetchDataFailureAction = { type: FETCH_DATA_FAILURE, error: Error };

export type AddTaskAction = { type: ADD_TASK, label: string };

export type SetLabelAction = { type: SET_LABEL, id: string, label: string };

export type SetDueAction = { type: SET_DUE, id: string, due: string };

export type RemoveTaskAction = { type: REMOVE_TASK, id: string };

export type ApplyCategoryAction = { type: APPLY_CATEGORY, id: string };

export type GenerateOutputAction = { type: GENERATE_OUTPUT };

export type Action =
  | FetchDataBeginAction
  | FetchDataSuccessAction
  | FetchDataFailureAction
  | AddTaskAction
  | SetLabelAction
  | SetDueAction
  | RemoveTaskAction
  | ApplyCategoryAction
  | GenerateOutputAction;
