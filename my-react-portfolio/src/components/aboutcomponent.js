import React from "react";
import { Link } from "react-router-dom";

function aboutComponent() {
  return (
    <div>
      <div>about component</div>
      <Link to="/home">go home</Link>
    </div>
  );
}

export default aboutComponent;
