import React from "react";
import Header from "./headercomponent";
import Footer from "./footercomponent";
import Home from "./homecomponent";
import about from "./aboutcomponent";
import work from "./workcomponent";
import { Switch, Route, Redirect } from "react-router-dom";

function Main() {
  return (
    <div>
      <Header>
        <div>The portfolio REACT made</div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={about} />
          <Route path="/work" component={work} />
          <Redirect to="/home" />
        </Switch>
      </Header>
      <Footer></Footer>
    </div>
  );
}

export default Main;
