import React from "react";
import { Link } from "react-router-dom";

function HomeComponent() {
  return (
    <div>
      <div>home component</div>
      <Link to="/about">How About...</Link>
    </div>
  );
}

export default HomeComponent;
