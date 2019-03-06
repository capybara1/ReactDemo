//@flow

import type { State, Action, ApplyCategoryAction } from "../shared/types";
import { APPLY_CATEGORY } from "../shared/actionTypes";
import { TODAY, generateId } from "../shared/Utils";

const createTaskModel = (label: string = "") => {
  const result = {
    id: generateId(),
    due: TODAY,
    label: label
  };
  return result;
};

const tasksReducer: (State, Action) => State = (state, action) => {
  switch (action.type) {
    case APPLY_CATEGORY:
      action = ((action: any): ApplyCategoryAction);
      const id = action.id;
      const category = state.categories.find(e => e.id === id);
      if (!category) return state;
      const tags = category.tags;
      const newLabels = state.templates
        .filter(i => i.tags.some(t => tags.includes(t)))
        .map(i => i.label);
      if (newLabels.length === 0) return state;
      const newTasks = newLabels.map(l => createTaskModel(l));
      return {
        ...state,
        tasks: state.tasks.concat(newTasks)
      };
    default:
      return state;
  }
};

export default tasksReducer;
