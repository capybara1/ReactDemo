//@flow

export type Category = {
  id: string,
  label: string,
  tags: string[]
};

export type Template = {
  label: string,
  tags: string[]
};

export type Task = {
  id: string,
  label: string,
  due: string
};

export type TaskView = {
  label: string,
  due?: string
};

export type NotificationLevel = "info" | "warn" | "error";

export type UserNotification = {
  message: string,
  level: NotificationLevel
};

export type UserInteraction = {
  notify: (message: string, level: NotificationLevel) => void
};
