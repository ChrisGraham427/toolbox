import Contact from "./Contact";

export default function ContactList(props) {
  const contactList = props.data;
  return (
    <section className="contact__container">
      <ul className="contact__container-list">
        {contactList &&
          contactList.map((contact) => {
            return (
              <Contact
                key={contact.id}
                data={contact}
                submitDelete={props.submitDelete}
              />
            );
          })}
      </ul>
    </section>
  );
}
