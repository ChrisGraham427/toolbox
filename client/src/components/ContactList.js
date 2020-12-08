import Contact from "./Contact";

export default function ContactList(props) {
  const contactList = props.data;
  return (
    <section className="contact__container">
      <h1 className="contact__container-title" />
      <ul className="contact__container-list">
        {contactList &&
          contactList.map((contact) => {
            return <Contact key={contact.id} data={contact} />;
          })}
      </ul>
    </section>
  );
}
