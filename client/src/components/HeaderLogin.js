import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
function Header(props) {
  console.log(props);
  return (
    <header className="navbar">
      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + "/Atrezi-logo.png"}
          className="navbar__logo"
        />
      </Link>
      <Link to="/login">
        <button className="navbar__button-github">LOGIN</button>
      </Link>
      <Link to="/auth/google">
        <button className="navbar__button-google">LOGIN</button>
      </Link>
    </header>
  );
}

export default withRouter(Header);
