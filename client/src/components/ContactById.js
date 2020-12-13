import ContactCardById from "./ContactCardById";

export default function ContactById(props) {
  const contactList = props.data;
  console.log("contactList", contactList);
  return (
    <section className="contactById__container">
      <ul className="contactById__container-list">
        {contactList &&
          props.currentContactId &&
          contactList
            .filter((contact) => {
              return contact.id === parseInt(props.currentContactId);
            })
            .map((contact) => {
              return (
                <ContactCardById
                  key={contact.id}
                  currentContactId={props.currentContactId}
                  data={contact}
                />
              );
            })}
      </ul>
    </section>
  );
}
