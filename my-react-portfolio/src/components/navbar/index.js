import React from "react";
import {
  nav,
  navlink,
  bars,
  navmenu,
  NavBtn,
  NavBtnLink,
} from "./navbarelements";

function navbar() {
  return;
  <div className="app">
    <nav>
      <navlink to="/">
        <img src={require("./images/kaz")} alt="logo" />
      </navlink>
      <bars></bars>
      <NavMenu>
        <navlink to="./pages/about">ABOUT</navlink>
        <navlink to="./pages/home">HOME</navlink>
        <navlink to="./page/work">WORK</navlink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/home">THE BEGINNING</NavBtnLink>
      </NavBtn>
    </nav>
  </div>;
}

export default navbar;
