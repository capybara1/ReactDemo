//@flow

import type { UserNotification, Action } from "../shared/types";
import { FETCH_DATA_FAILURE } from "../shared/actionTypes";

const notificationReducer: (?UserNotification, Action) => ?UserNotification = (
  state = null,
  action
) => {
  switch (action.type) {
    case FETCH_DATA_FAILURE:
      return {
        message:
          "Something went wrong: unable to load 'data.json'. Please ensure network connectivity and try again.",
        level: "error"
      };
    default:
      return state;
  }
};

export default notificationReducer;
