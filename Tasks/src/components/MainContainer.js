import React, { Component } from "react"; // Required for JSX

import MainComponent from "./MainComponent";
import { TODAY, generateId } from "../shared/Utils";

class MainContainer extends Component {

    constructor() {
        super();
        this.state = {
            categories: null,
            items: null,
            tasks: []
        };
    }

    async componentDidMount() {
        const response = await fetch("data.json");
        const data = await response.json();
        this.setState(prevState => {
            return {
                ...prevState,
                categories: data.categories.map(i => {
                    i.id = generateId();
                    return i;
                }),
                templates: data.templates,
                tasks: []
            };
        });
    }

    handleItemAdd = () => {
        this.setState(prevState => {
            return {
                ...prevState,
                tasks: prevState.tasks.concat([this.createTaskModel()])
            };
        });
    }

    handleItemChange = (id, event) => {
        const {name, type, value, checked} = event.target;
        this.setState(prevState => {
            return {
                ...prevState,
                tasks: prevState.tasks.map(i => {
                    if (i.id === id) {
                        i[name] = type === "checkbox"
                            ? checked
                            : value;
                    }
                    return i;
                })
            };
        });
    }

    handleItemRemove = (id) => {
        this.setState(prevState => {
            return {
                ...prevState,
                tasks: prevState.tasks.filter(i => i.id !== id)
            };
        });
    }

    applyCategory = (id) => {
        const category = this.state.categories.find(e => e.id === id);
        const tags = category.tags;
        const newLabels = this.state.templates.filter(i => i.tags.some(t => tags.includes(t)))
            .map(i => i.label);
        if (newLabels.length > 0) {
            this.setState(prevState => {
                const newTasks = newLabels.map(l => this.createTaskModel(l));
                return {
                    ...prevState,
                    tasks: prevState.tasks.concat(newTasks)
                };
            });
        }
    }

    createTaskModel(label = "") {
        const result = {
            id: generateId(),
            due: TODAY,
            label: label
        };
        return result;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const representation = this.state.tasks
            .map(this.mapToRepresentationModel);
        const data = encodeURIComponent(JSON.stringify(representation));
        window.open("events?descr=" + data, "_blank");
    }

    mapToRepresentationModel = (modelItem) => {
        const result = { 
            label: modelItem.label
        };
        if (modelItem.due !== TODAY) {
            result.due = modelItem.due;
        }
        return result;
    }

    render = () =>
        <MainComponent
            state={this.state}
            handleItemAdd={this.handleItemAdd}
            handleItemChange={this.handleItemChange}
            handleItemRemove={this.handleItemRemove}
            applyCategory={this.applyCategory}
            handleSubmit={this.handleSubmit}
        />;
}

export default MainContainer;