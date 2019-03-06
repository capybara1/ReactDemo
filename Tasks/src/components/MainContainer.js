// @flow

import { connect } from "react-redux";

import MainComponent from "./MainComponent";
import {
  addTask,
  setLabel,
  setDue,
  removeTask,
  applyCategory,
  generateOutput
} from "../shared/actions";

const mapStateToProps = state => ({
  categories: state.categories,
  tasks: state.tasks,
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
  handleItemAdd: () => dispatch(addTask()),
  handleItemChange: (id, event) => {
    const { name, value } = event.target;
    switch (name) {
      case "label":
        dispatch(setLabel(id, value));
        break;
      case "due":
        dispatch(setDue(id, value));
        break;
      default:
        break;
    }
  },
  handleItemRemove: id => dispatch(removeTask(id)),
  applyCategory: id => dispatch(applyCategory(id)),
  handleSubmit: event => {
    event.preventDefault();
    dispatch(generateOutput());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent);
