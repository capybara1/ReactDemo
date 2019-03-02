// @flow

import React, { useState, useEffect } from "react"; // Required for JSX

import type { Category, Template, Task, TaskView } from "../shared/types";
import MainComponent from "./MainComponent";
import { TODAY, generateId } from "../shared/Utils";
import { mapToRepresentationModel } from "../shared/converters";

const MainContainer = () => {
  const [categories, setCategories] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const response = await fetch("data.json");
      const data = await response.json();
      setCategories(
        data.categories.map(i => {
          i.id = generateId();
          return i;
        })
      );
      setTemplates(data.templates);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []); // No declared dependencies to state variables implies the effect is only run once

  const createTaskModel = (label: string = "") => {
    const result = {
      id: generateId(),
      due: TODAY,
      label: label
    };
    return result;
  };

  const handleItemAdd = () => {
    setTasks(tasks.concat([createTaskModel()]));
  };

  const handleItemChange = (id: number, event: any) => {
    const { name, type, value, checked } = event.target;
    setTasks(
      tasks.map(i => {
        if (i.id === id) {
          i[name] = type === "checkbox" ? checked : value;
        }
        return i;
      })
    );
  };

  const handleItemRemove = (id: number) => {
    setTasks(tasks.filter(i => i.id !== id));
  };

  const applyCategory = (id: number) => {
    const category = categories.find(e => e.id === id);
    if (!category) return;
    const tags = category.tags;
    const newLabels = templates
      .filter(i => i.tags.some(t => tags.includes(t)))
      .map(i => i.label);
    if (newLabels.length > 0) {
      const newTasks = newLabels.map(l => createTaskModel(l));
      setTasks(tasks.concat(newTasks));
    }
  };

  const handleSubmit = (event: SyntheticEvent<>) => {
    event.preventDefault();
    const representation = tasks.map(mapToRepresentationModel);
    const data = encodeURIComponent(JSON.stringify(representation));
    window.open("events?descr=" + data, "_blank");
  };

  return (
    <MainComponent
      state={{
        categories,
        templates,
        tasks,
        isLoading,
        isError
      }}
      handleItemAdd={handleItemAdd}
      handleItemChange={handleItemChange}
      handleItemRemove={handleItemRemove}
      applyCategory={applyCategory}
      handleSubmit={handleSubmit}
    />
  );
};

export default MainContainer;
