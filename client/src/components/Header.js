import React from "react";

import { NavLink } from "react-router-dom";
function Header() {
  return (
    <nav className="navbar">
      <span>LOGO</span>
      <ul className="navbar__list">
        <NavLink
          className="navbar__list-item"
          to="/project"
          activeClassName="nav-link__active"
        >
          Projects
        </NavLink>
        <NavLink
          className="navbar__list-item"
          to="/contact"
          activeClassName="nav-link__active"
        >
          Contacts
        </NavLink>
      </ul>
    </nav>
  );
}

export default Header;
