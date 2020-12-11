import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

export default function LoginPage(props) {
  return (
    <section className="hero__main">
      <Header />
      <LoginForm data={props.data} />
      <Footer />
    </section>
  );
}
