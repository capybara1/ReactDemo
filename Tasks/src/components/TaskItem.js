import React, { Component } from "react"; // Required for JSX

import { TODAY } from "../shared/Utils";
import styles from "./TaskItem.css";

class TaskItem extends Component {
  componentDidMount() {
    if (this.props.item.label.length === 0) {
      this.labelInput.focus();
    }
  }

  render() {
    const { item, handleChange, remove } = this.props;
    const result = (
      <div className="card">
        <div className="card-header" id={"item_head_" + item.id}>
          <div className="input-group">
            <input
              type="text"
              name="label"
              ref={input => {
                this.labelInput = input;
              }}
              className={"form-control " + styles.taskLabel}
              value={item.label}
              onChange={event => handleChange(item.id, event)}
            />
            <div className="input-group-append">
              <button
                type="button"
                className={styles.menu + " btn btn-light"}
                data-toggle="collapse"
                data-target={"#item_body_" + item.id}
                aria-expanded="false"
                aria-controls={"item_body_" + item.id}
              >
                <span className="fas fa-ellipsis-v" />
              </button>
              <button
                type="button"
                className="close btn btn-light"
                aria-label="Removes the task"
                title="Removes the task"
                onClick={() => remove(item.id)}
              >
                <span className="fas fa-trash-alt" />
              </button>
            </div>
          </div>
        </div>
        <div
          id={"item_body_" + item.id}
          className="collapse"
          aria-labelledby={"item_head_" + item.id}
          data-parent="#taskList"
        >
          <div className="card-body">
            <div className="form-group row">
              <label
                className="col-sm-2 col-form-label"
                htmlFor={"item_" + item.id + "_due"}
              >
                Due
              </label>
              <div className="col-sm-10">
                <input
                  id={"item_" + item.id + "_due"}
                  name="due"
                  type="date"
                  min={TODAY}
                  value={item.due}
                  onChange={event => handleChange(item.id, event)}
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    return result;
  }
}

export default TaskItem;
