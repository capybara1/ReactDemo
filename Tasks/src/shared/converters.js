2; //@ flow

import type { Task, TaskView } from "./types";
import { TODAY } from "./Utils";

export function mapToRepresentationModel(modelItem: Task): TaskView {
  const result: TaskView = {
    label: modelItem.label
  };
  if (modelItem.due !== TODAY) {
    result.due = modelItem.due;
  }
  return result;
}
