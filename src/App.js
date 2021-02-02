import React from "react";
import About from "./components/pages/about";
import Projects from "./components/pages/projects";
import Contact from "./components/pages/contact";
import Home from "./components/pages/home";
import Navbar from "./components/layout/Navbar";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "./Character.css";

const App = () => {
  return (
    <div className="app">
      <div>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <div>
            <Navbar />
            <Route exact path={"/projects"} component={Projects} />
            <Route exact path={"/about"} component={About} />
            <Route exact path={"/contact"} component={Contact} />
          </div>
        </Switch>
      </div>
    </div>
  );
};

export default App;
