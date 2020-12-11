import React from "react";
import { Link } from "react-router-dom";

export default class Aside extends React.Component {
  render() {
    return (
      <aside className="aside">
        <Link to="/project">
          <div className="aside__logo-icon">
            <label className="aside__logo-title">PROJECTS</label>
            <img
              src={process.env.PUBLIC_URL + "/clipboard.svg"}
              className="aside__logo"
            />
          </div>
        </Link>
        <Link to="/contact">
          <div className="aside__logo-icon">
            <label className="aside__logo-title">CONTACTS</label>
            <img
              src={process.env.PUBLIC_URL + "/user.svg"}
              className="aside__logo"
            />
          </div>
        </Link>
        <Link to="/images">
          <div className="aside__logo-icon">
            <label className="aside__logo-title">IMAGES</label>
            <img
              src={process.env.PUBLIC_URL + "/picture.svg"}
              className="aside__logo"
            />
          </div>
        </Link>
        <Link to="/task">
          <div className="aside__logo-icon">
            <label className="aside__logo-title">TASKS</label>
            <img
              src={process.env.PUBLIC_URL + "/picture.svg"}
              className="aside__logo"
            />
          </div>
        </Link>
      </aside>
    );
  }
}
