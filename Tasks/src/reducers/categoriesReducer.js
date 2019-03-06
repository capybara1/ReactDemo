//@flow

import type { Category, Action, FetchDataSuccessAction } from "../shared/types";
import { FETCH_DATA_SUCCESS } from "../shared/actionTypes";
import { generateId } from "../shared/Utils";

const categoriesReducer: (Category[], Action) => Category[] = (
  state = [],
  action
) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      action = ((action: any): FetchDataSuccessAction);
      return action.payload.categories.map(i => {
        i.id = generateId();
        return i;
      });
    default:
      return state;
  }
};

export default categoriesReducer;
