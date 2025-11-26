import React from "react";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component<any, any> {
  render(): React.ReactNode {
    return (
      <>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </>
    );
  }
}

export default NavBar;
