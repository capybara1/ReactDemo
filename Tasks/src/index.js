import React from "react";
import { render } from "react-dom";
import { register as registerServiceWorker } from "./serviceWorker";

import "./custom.scss";
import "./index.css";
import App from "./components/App";

render(<App />, document.getElementById("root"));

registerServiceWorker();
