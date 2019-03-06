//@flow

import type { Action } from "../shared/types";
import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from "../shared/actionTypes";

const isLoadingReducer: (boolean, Action) => boolean = (
  state = false,
  action
) => {
  switch (action.type) {
    case FETCH_DATA_BEGIN:
      return true;
    case FETCH_DATA_SUCCESS:
      return false;
    case FETCH_DATA_FAILURE:
      return false;
    default:
      return state;
  }
};

export default isLoadingReducer;
