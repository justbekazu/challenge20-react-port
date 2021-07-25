import react from "react";
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
        <navlink to="/about">ABOUT</navlink>
        <navlink to="/home">HOME</navlink>
        <navlink to="/work">WORK</navlink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/home">THE BEGINNING</NavBtnLink>
      </NavBtn>
    </nav>
  </div>;
}

export default navbar;
