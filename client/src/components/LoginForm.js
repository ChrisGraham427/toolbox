const API_URL = "http://localhost:8080";
export default function LoginForm(props) {
  console.log(props);

  return (
    <section className="addlogin">
      <div>
        <h1>Log In</h1>
        {!Object.keys(props.data).length ? (
          <>
            <p>Login with github 👇</p>
            <a href={`${API_URL}/auth/github`}>LOGIN</a>
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
      </div>
    </section>
  );
}
