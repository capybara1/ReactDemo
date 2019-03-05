//@flow

import React from "react"; // Required for JSX
import type { StatelessFunctionalComponent } from "react";

import type { Category, Template, Task } from "../shared/types";
import TaskList from "./TaskList";
import CategoryList from "./CategoryList";
import Spinner from "./Spinner";

type State = {
  categories: Category[],
  templates: Template[],
  tasks: Task[],
  isLoading: boolean
};

type ApplyCategoryHandler = (id: string) => void;

type ItemAddEventHandler = () => void;

type ItemChangeEventHandler = (
  id: string,
  event: SyntheticInputEvent<>
) => void;

type ItemRemoveEventHandler = (id: string) => void;

type SubmitEventHandler = (event: SyntheticEvent<>) => void;

type Props = {
  state: State,
  applyCategory: ApplyCategoryHandler,
  handleItemAdd: ItemAddEventHandler,
  handleItemChange: ItemChangeEventHandler,
  handleItemRemove: ItemRemoveEventHandler,
  handleSubmit: SubmitEventHandler
};

const MainComponent: StatelessFunctionalComponent<Props> = props => {
  const renderForm = props => (
    <form onSubmit={props.handleSubmit}>
      <TaskList
        tasks={props.state.tasks}
        handleItemChange={props.handleItemChange}
        handleItemRemove={props.handleItemRemove}
      />
      <button
        type="button"
        style={{ width: "100%", minHeight: "2.2rem" }}
        className="btn btn-secondary d-block mx-auto my-1"
        onClick={() => props.handleItemAdd()}
      >
        <span className="fas fa-plus" />
      </button>
      <div className="row">
        <div className="col-sm-8">
          <CategoryList
            categories={props.state.categories}
            applyCategory={props.applyCategory}
          />
        </div>
        <div className="col-sm-4 align-text-bottom py-1">
          <button type="submit" className="btn btn-primary float-right">
            <span
              className="fas fa-file-download m-2"
              style={{ fontSize: "2rem" }}
            />
          </button>
        </div>
      </div>
    </form>
  );
  const result = (
    <main role="main" className="container">
      {props.state.isLoading ? <Spinner /> : renderForm(props)}
    </main>
  );
  return result;
};

export default MainComponent;
