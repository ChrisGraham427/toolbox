import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="navbar">
      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + "/scoped-logo.png"}
          className="navbar__logo"
        />
      </Link>
      <div className="navbar__links">
        <Link to="/project">
          <button className="navbar__button">DASHBOARD</button>
        </Link>
        <Link to="/schedule">
          <button className="navbar__button">CALENDAR</button>
        </Link>
        <Link to="/login">
          <button className="navbar__button">LOGIN</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
