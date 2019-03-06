//@flow

import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { register as registerServiceWorker } from "./serviceWorker";

import "./custom.scss";
import "./index.css";
import rootReducer from "./reducers";
import App from "./components/App";

const store = createStore(rootReducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");
if (!rootElement) throw Error("An element with id 'root' does not exist");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

registerServiceWorker();
