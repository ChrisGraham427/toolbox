import Header from "./Header";
import Footer from "./Footer";
import Aside from "./Aside";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

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
