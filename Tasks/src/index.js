//@flow

import React from "react";
import { render } from "react-dom";
import { register as registerServiceWorker } from "./serviceWorker";

import "./custom.scss";
import "./index.css";
import App from "./components/App";

const rootElement = document.getElementById("root");
if (!rootElement) throw Error("An element with id 'root' does not exist");

render(<App />, rootElement);

registerServiceWorker();
