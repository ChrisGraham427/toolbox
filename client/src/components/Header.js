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
      <div className="navbar__links">
        <Link to="/project">
          <button className="navbar__button">CREATE</button>
        </Link>
        <form
          onSubmit={(event) => {
            props.handleProjectbyID(event, (id) => {
              props.history.push(`/project/${id}`);
            });
          }}
        >
          <input
            className="navbar__input"
            type="int"
            name="projectId"
            placeholder="ENTER AN ID, HIT PROJECT TO SEARCH"
          />
          <button type="submit" className="navbar__button">
            PROJECT
          </button>
        </form>

        <Link to="/update">
          <button className="navbar__button">UPDATE</button>
        </Link>

        <Link to="/schedule">
          <button className="navbar__button">CALENDAR</button>
        </Link>
        <Link to="/login">
          <button className="navbar__button-github">LOGIN</button>
        </Link>
        <Link to="/auth/google">
          <button className="navbar__button-google">LOGIN</button>
        </Link>
      </div>
    </header>
  );
}

export default withRouter(Header);
