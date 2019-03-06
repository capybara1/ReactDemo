//@flow

import React, { useEffect } from "react"; // Required for JSX
import type { StatelessFunctionalComponent } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import type { Dispatch } from "../shared/types";
import { fetchData } from "../shared/actions";
import UserInteractionContainer from "./UserInteractionContainer";
import Navbar from "./Navbar";
import NavbarItem from "./NavbarItem";
import MainContainer from "./MainContainer";
import About from "./About";
import Footer from "./Footer";

type Props = {
  dispatch: Dispatch
};

const App: StatelessFunctionalComponent<Props> = ({ dispatch }) => {
  useEffect(() => {
    dispatch(fetchData());
  }, []); // No declared dependencies to state variables implies the effect is only run once

  return (
    <div>
      <Router>
        <div>
          <Navbar label="Tasks" href="/">
            <NavbarItem label="Generator" exact href="/" />
            <NavbarItem label="About" href="/about" align="right" />
          </Navbar>
          <UserInteractionContainer>
            <Route exact path="/" component={MainContainer} />
            <Route path="/about" component={About} />
          </UserInteractionContainer>
        </div>
      </Router>
      <Footer company="Acme Ltd." />
    </div>
  );
};

export default connect()(App);
