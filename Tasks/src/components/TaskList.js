import React from "react"; // Required for JSX

import TaskItem from "./TaskItem";

const TaskList = ({ tasks, handleItemChange, handleItemRemove }) => (
  <div className="accordion" id="taskList">
    {tasks.map(i => mapToItem(i, handleItemChange, handleItemRemove))}
  </div>
);

const mapToItem = (modelItem, handleItemChange, handleItemRemove) => (
  <TaskItem
    key={modelItem.id.toString()}
    item={modelItem}
    handleChange={handleItemChange}
    remove={handleItemRemove}
  />
);

export default TaskList;
