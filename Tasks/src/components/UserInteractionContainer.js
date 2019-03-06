//@flow

import { connect } from "react-redux";

import UserInteractionComponent from "./UserInteractionComponent";

const getClassName = level => {
  let result = "alert";
  switch (level) {
    case "info":
      result += " alert-info";
      break;
    case "warn":
      result += " alert-warning";
      break;
    case "error":
      result += " alert-danger";
      break;
    default:
      break;
  }
  return result;
};

const mapStateToProps = state =>
  state && state.notification
    ? {
        showNotification: true,
        message: state.notification.message,
        className: getClassName(state.notification.level)
      }
    : {
        showNotification: false,
        message: "",
        className: ""
      };

export default connect(mapStateToProps)(UserInteractionComponent);
