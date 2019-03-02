import React from "react"; // Required for JSX
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./Navbar";
import NavbarItem from "./NavbarItem";
import MainContainer from "./MainContainer";
import About from "./About";
import Footer from "./Footer";

const App = () => (
  <div>
    <Router>
      <div>
        <Navbar label="Tasks" href="/">
          <NavbarItem label="Generator" exact href="/" />
          <NavbarItem label="About" href="/about" align="right" />
        </Navbar>
        <Route exact path="/" component={MainContainer} />
        <Route path="/about" component={About} />
      </div>
    </Router>
    <Footer company="Acme Ltd." />
  </div>
);

export default App;
