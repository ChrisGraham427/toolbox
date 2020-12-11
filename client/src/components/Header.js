import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="navbar">
      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + "/scoped-logo.png"}
          className="navbar__logo"
        />
      </Link>
      <div className="navbar__links">
        <form
          onSubmit={(event) => {
            props.getProjectById(event, (id) => {
              props.history.push(`/${id}`);
            });
          }}
        >
          <input type="int" name="projectId" />
          <button type="submit" className="navbar__button">
            PROJECT #
          </button>
        </form>

        <Link to="/project">
          <button className="navbar__button">MANAGE</button>
        </Link>
        <Link to="/schedule">
          <button className="navbar__button">CALENDAR</button>
        </Link>
        <Link to="/login">
          <button className="navbar__button">LOGIN</button>
        </Link>
        <Link to="/auth/google">
          <button className="navbar__button">GOOGLE</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
