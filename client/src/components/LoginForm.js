import React from "react";
import github from "../assets/github.png";
import { Link } from "react-router-dom";
const API_URL = "http://localhost:8080";

function LoginForm(props) {
  const newUser = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (!password) {
      alert("Password can not be empty.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    console.log("NewUser: ", email, password, confirmPassword);
    alert("Welcome to Atrezi!");
  };

  console.log(props);

  return (
    <section className="addlogin">
      <div className="addlogin__container">
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + "/Atrezi-logo.png"}
            className="login__logo"
          />
        </Link>
        {/* <div className="addlogin__form">
          <img src={github} alt="github" className="addlogin__image-github" />

          <h1 className="addlogin-title">Log In With GitHub</h1>
          {!Object.keys(props.data).length ? (
            <>
              <a href={`${API_URL}/auth/github`} className="addlogin__a">
                LOGIN
              </a>
            </>
          ) : (
            <>
              <h2>Welcome {props.data.displayName}</h2>
              <img
                className="user-avatar"
                src={props.data.photos[0].value}
                alt="user profile avatar"
              />
              <button onClick={props.handleLogout}>logout</button>
            </>
          )}
        </div> */}
        <section className="adduser">
          <form onSubmit={newUser} className="adduser__form">
            <h2 className="adduser__form-title">Account Sign-In</h2>
            <div className="adduser__form-label">
              EMAIL{" "}
              <input
                type="text"
                name="email"
                className="adduser__form-input"
                value="chris@atrezi.io"
              />
            </div>
            <div className="adduser__form-label">
              PASSWORD{" "}
              <input
                type="password"
                name="password"
                className="adduser__form-input"
              />
            </div>
            <div className="adduser__form-label">
              CONFIRM PASSWORD{" "}
              <input
                type="password"
                name="confirmPassword"
                className="adduser__form-input"
              />
            </div>
            <Link to="/project">
              <button className="adduser__form-button-login">LOGIN</button>
            </Link>
            <button className="adduser__form-button">CREATE ACCOUNT</button>
          </form>
        </section>
      </div>
    </section>
  );
}
export default LoginForm;
