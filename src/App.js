import React from "react";
import Navbar from "./components/layout/Navbar";
import about from "./components/pages/about";
import projects from "./components/pages/projects";
import contact from "./components/pages/contact";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="container">
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  timeout={1000}
                  classNames="node"
                  key={location.key}
                >
                  <Switch location={location}>
                    <Route exact path={"/"} component={projects} />
                    <Route exact path={"/about"} component={about} />
                    <Route exact patch={"/contact"} component={contact} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </div>
      </Router>
    </div>
  );
};

export default App;
