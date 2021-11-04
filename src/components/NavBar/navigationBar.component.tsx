import React from "react";
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./navigationBar.styles";

export default function NavigationBar() {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/">People</NavLink>
          <NavLink to="/categories">Chuck Categories</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}
