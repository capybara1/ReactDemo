import React from "react"; // Required for JSX

import TaskList from "./TaskList";
import CategoryList from "./CategoryList";
import Spinner from "./Spinner";

const MainComponent = props => {
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
      {props.state.isError ? (
        <div className="alert alert-danger" role="alert">
          Something went wrong
        </div>
      ) : props.state.isLoading ? (
        <Spinner />
      ) : (
        renderForm(props)
      )}
    </main>
  );
  return result;
};

export default MainComponent;
