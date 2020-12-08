import Header from "./Header";
import Footer from "./Footer";
import Aside from "./Aside";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

export default function ContactMain(props) {
  return (
    <section className="contact__main">
      <Header />
      <section className="contact__main-column">
        <Aside className="contact__main-left-column" />
        <div className="contact__main-right-column">
          <AddContact handleSubmit={props.handleSubmit} />
          <ContactList data={props.data} submitDelete={props.submitDelete} />
        </div>
      </section>
      <Footer />
    </section>
  );
}
