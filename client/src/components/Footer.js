import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bottomnav">
      <div className="bottomnav__links">
        <img
          src={process.env.PUBLIC_URL + "/facebook.svg"}
          className="bottomnav__logo"
        />
        <img
          src={process.env.PUBLIC_URL + "/twitter.svg"}
          className="bottomnav__logo"
        />
        <img
          src={process.env.PUBLIC_URL + "/linkedin.svg"}
          className="bottomnav__logo"
        />
      </div>
      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + "/scoped-logo.png"}
          className="bottomnav__title"
        />
      </Link>
    </footer>
  );
}

export default Footer;
