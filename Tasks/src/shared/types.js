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
