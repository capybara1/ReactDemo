//@flow

import type {
  Task,
  Action,
  SetLabelAction,
  SetDueAction,
  RemoveTaskAction
} from "../shared/types";
import {
  ADD_TASK,
  SET_LABEL,
  SET_DUE,
  REMOVE_TASK,
  GENERATE_OUTPUT
} from "../shared/actionTypes";
import { TODAY, generateId } from "../shared/Utils";
import { mapToRepresentationModel } from "../shared/converters";

const createTaskModel = (label: string = "") => {
  const result = {
    id: generateId(),
    due: TODAY,
    label: label
  };
  return result;
};

const tasksReducer: (Task[], Action) => Task[] = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return state.concat([createTaskModel()]);
    case SET_LABEL: {
      action = ((action: any): SetLabelAction);
      const { id, label } = action;
      return state.map(i => {
        if (i.id === id) {
          i.label = label;
        }
        return i;
      });
    }
    case SET_DUE: {
      action = ((action: any): SetDueAction);
      const { id, due } = action;
      return state.map(i => {
        if (i.id === id) {
          i.due = due;
        }
        return i;
      });
    }
    case REMOVE_TASK: {
      action = ((action: any): RemoveTaskAction);
      const id = action.id;
      return state.filter(i => i.id !== id);
    }
    case GENERATE_OUTPUT:
      const representation = state.map(mapToRepresentationModel);
      const data = encodeURIComponent(JSON.stringify(representation));
      window.open("events?descr=" + data, "_blank");
      return state;
    default:
      return state;
  }
};

export default tasksReducer;
