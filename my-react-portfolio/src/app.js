import React from "react";
// import "./index";
import "./App.css";
import Main from "./components/maincomponents";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeComponent from "./components/homecomponent";
import homePage from "./pages/home";
import aboutPage from "./pages/about";
import aboutComponent from "./components/aboutcomponent";
import workPage from "./pages/work";

<div>Testing</div>;

function app() {
  return (
    <Router className="Portfolio">
      <navbar></navbar>
      <switch>
        <Route path="/" exact component={homePage} />
        <Route path="/about" component={aboutPage} />
        <Route path="/work" component={workPage} />
      </switch>
    </Router>
  );
}

export default app;
