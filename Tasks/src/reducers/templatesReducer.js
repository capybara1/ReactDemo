//@flow

import type { Template, Action, FetchDataSuccessAction } from "../shared/types";
import { FETCH_DATA_SUCCESS } from "../shared/actionTypes";

const templatesReducer: (Template[], Action) => Template[] = (
  state = [],
  action
) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      action = ((action: any): FetchDataSuccessAction);
      return action.payload.templates;
    default:
      return state;
  }
};

export default templatesReducer;
