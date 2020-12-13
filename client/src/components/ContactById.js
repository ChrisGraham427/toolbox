export default function ContactById(props) {
  const contactList = props.contactData;
  console.log("contactList", contactList);
  return (
    <section className="contactById__container">
      <ul className="contactById__container-list">
        {contactList.length &&
          props.currentContactId &&
          contactList
            .filter((contact) => {
              return contact.project_id === parseInt(props.currentContactId);
            })
            .map((contact) => {
              console.log(contact);
              return (
                <li className="contact_cardid" key={contact.project_id}>
                  <div>
                    <h2>{contact.name}</h2>
                    <div></div>
                  </div>
                  <p>{contact.company}</p>
                  <div>
                    <p> {contact.position}</p>
                    <p> {contact.phone}</p>
                    <p> {contact.email}</p>
                  </div>
                  <div>{contact.id}</div>
                </li>
              );
            })}
      </ul>
    </section>
  );
}
