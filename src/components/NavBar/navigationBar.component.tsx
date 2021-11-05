import React from "react";
import {
  Nav,
  NavLink,
  NavMenu
} from "./navigationBar.styles";

export default function NavigationBar() {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/">People</NavLink>
          <NavLink to="/categories">Chuck Categories</NavLink>
          <NavLink to="/search">Search</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}
