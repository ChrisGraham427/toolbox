import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";

export default function Scheduler() {
  return (
    <section className="scheduler__main">
      <Header />
      <section className="scheduler__main-column">
        <Aside className="scheduler__main-left-column" />
        <div className="scheduler__main-right-column"></div>
      </section>
      <Footer />
    </section>
  );
}
