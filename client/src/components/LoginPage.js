import LoginForm from "../components/LoginForm";

export default function LoginPage(props) {
  return (
    <section className="hero__main">
      <LoginForm data={props.data} />
    </section>
  );
}
