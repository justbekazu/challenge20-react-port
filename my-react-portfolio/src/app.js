import React from "react";
import "./index";
import "./app.css";
import "./components/maincomponents";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from "./components/homecomponent";
import home from "./pages ";
import about from "./pages/about";
import about from "./components/aboutcomponent";
import work from "./pages/work";

function portfolio() {
  return (
    <Router className="Portfolio">
      <navbar></navbar>
      <switch>
        <Route path="/" exact component={home} />
        <Route path="/about" component={about} />
        <Route path="/work" component={work} />
      </switch>
    </Router>
  );
}

export default portfolio;
