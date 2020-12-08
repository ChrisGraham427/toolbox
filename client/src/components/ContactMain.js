import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";
import ContactList from "../components/ContactList";
import AddContact from "../components/AddContact";

export default function ContactMain(props) {
  console.log(props);
  return (
    <section className="contact__main">
      <Header />
      <section className="contact__main-column">
        <Aside className="contact__main-left-column" />
        <div className="contact__main-right-column">
          <AddContact />
          <ContactList data={props.data} />
        </div>
      </section>
      <Footer />
    </section>
  );
}
