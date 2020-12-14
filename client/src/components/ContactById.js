export default function ContactById(props) {
  const contactList = props.contactData;
  console.log("contactList", contactList);
  return (
    <section className="contactById__container">
      <h2 className="contactById__container-title">CONTACTS</h2>
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
                <li className="contact__cardid" key={contact.project_id}>
                  <div>
                    <h2 className="contact__cardid-name">{contact.name}</h2>
                  </div>
                  <p className="contact__cardid-company">{contact.company}</p>
                  <div>
                    <p className="contact__cardid-position">
                      {" "}
                      {contact.position}
                    </p>
                    <p className="contact__cardid-phone"> {contact.phone}</p>
                    <p className="contact__cardid-email"> {contact.email}</p>
                  </div>
                </li>
              );
            })}
      </ul>
    </section>
  );
}
