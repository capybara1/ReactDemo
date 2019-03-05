//@flow

import React from "react"; // Required for JSX
import type { StatelessFunctionalComponent } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import UserInteractionPanel from "./UserInteractionPanel";
import Navbar from "./Navbar";
import NavbarItem from "./NavbarItem";
import MainContainer from "./MainContainer";
import About from "./About";
import Footer from "./Footer";

const App: StatelessFunctionalComponent<{}> = () => (
  <div>
    <Router>
      <div>
        <Navbar label="Tasks" href="/">
          <NavbarItem label="Generator" exact href="/" />
          <NavbarItem label="About" href="/about" align="right" />
        </Navbar>
        <UserInteractionPanel>
          <Route exact path="/" component={MainContainer} />
          <Route path="/about" component={About} />
        </UserInteractionPanel>
      </div>
    </Router>
    <Footer company="Acme Ltd." />
  </div>
);

export default App;
