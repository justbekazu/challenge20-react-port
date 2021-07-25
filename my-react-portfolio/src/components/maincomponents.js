import React from "React";
import header from "./headercomponent";
import footer from "./footercomponent";
import home from "./homecomponent";
import about from "./aboutcomponent";
import work from "./workcomponent";
import { swtch, route, redirect, withRouter } from "react-router-dom";

function Main() {
  return (
    <div>
      <header>
        <div>The portfolio REACT made</div>
        <swtch>
          <route path="/home" component={home} />
          <route path="/about" component={about} />
          <route path="/work" component={work} />
          <redirect to="/home" />
        </swtch>
      </header>
      ,<footer></footer>
    </div>
  );
}

export default Main;
