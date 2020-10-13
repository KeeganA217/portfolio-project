import React from "react";
import Navbar from "./components/layout/Navbar";
import home from "./components/pages/home";
import projects from "./components/pages/projects";
import contact from "./components/pages/contact";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path={"/"} component={home} />
            <Route exact path={"/projects"} component={projects} />
            <Route exact patch={"/contact"} component={contact} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
