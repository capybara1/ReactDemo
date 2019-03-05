// @flow

import React, { useState, useEffect, useContext } from "react"; // Required for JSX
import type { StatelessFunctionalComponent } from "react";

import type { Category, Template, Task } from "../shared/types";
import UserInteractionContext from "../context/UserInteractionContext";
import MainComponent from "./MainComponent";
import { TODAY, generateId } from "../shared/Utils";
import { mapToRepresentationModel } from "../shared/converters";

const MainContainer: StatelessFunctionalComponent<{}> = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const userInteraction = useContext(UserInteractionContext);

  const fetchData = async () => {
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
      userInteraction.notify(
        "Something went wrong: unable to load 'data.json'. Please ensure network connectivity and try again.",
        "error"
      );
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

  const handleItemChange = (id: string, event: SyntheticInputEvent<>) => {
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

  const handleItemRemove = (id: string) => {
    setTasks(tasks.filter(i => i.id !== id));
  };

  const applyCategory = (id: string) => {
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
        isLoading
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
