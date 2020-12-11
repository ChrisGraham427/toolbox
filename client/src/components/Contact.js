export default function Contact(props) {
  const { name, company, position, email, phone, project_id, id } = props.data;
  const sendEmail = `mailto:${email}`;
  return (
    <li className="contact__card" key={project_id}>
      <section className="contact__card-main">
        <h2 className="contact__card-name">{name}</h2>
        <p className="contact__card">{company}</p>
        <p className="contact__card">{position}</p>
        <div className="contact__card-info">
          <a href={sendEmail}>
            <p className="contact__card-email">{email}</p>
          </a>
          <p className="contact__card">{phone}</p>
        </div>
        <form
          onSubmit={(event) => {
            props.submitDelete(event, id);
          }}
        >
          <button type="submit" className="project__card-button">
            DELETE
          </button>
        </form>
      </section>
    </li>
  );
}
