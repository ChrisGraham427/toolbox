export default function Contact(props) {
  const { name, company, position, email, phone, project_id, id } = props.data;
  const sendEmail = `mailto:${email}`;
  return (
    <li className="contact__card" key={project_id}>
      <section className="contact__card-main">
        <h2 className="contact__card-name">{name}</h2>
        <p className="contact__card">
          {position}-{company}
        </p>
        <p className="contact__card-phone">{phone}</p>
        <a href={sendEmail}>
          <p className="contact__card-email">{email}</p>
        </a>
        <div className="contact__card-info">
          <form
            onSubmit={(event) => {
              props.submitDelete(event, id);
            }}
          >
            <button type="submit" className="contact__card-button"></button>
          </form>
        </div>
      </section>
    </li>
  );
}
