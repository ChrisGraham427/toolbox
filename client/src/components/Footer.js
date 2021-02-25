import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bottomnav">
      <div className="bottomnav__links">
        <img
          src={process.env.PUBLIC_URL + "/facebook.svg"}
          className="bottomnav__logo"
          alt="logo"
        />
        <img
          src={process.env.PUBLIC_URL + "/twitter.svg"}
          className="bottomnav__logo"
          alt="logo"
        />
        <img
          src={process.env.PUBLIC_URL + "/linkedin.svg"}
          className="bottomnav__logo"
          alt="logo"
        />
      </div>
      <p className="bottomnav__produced">
        Produced by FlyinRoosterDesigns 2020
      </p>
      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + "/Atrezi-logo.png"}
          className="bottomnav__title"
          alt="logo"
        />
      </Link>
    </footer>
  );
}

export default Footer;
