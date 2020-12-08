export default function Contact(props) {
  const { name, company, position, email, phone, project_id, id } = props.data;
  return (
    <li className="contact__card" key={project_id}>
      <section className="contact__card-main">
        <h2 className="contact__card-name">{name}</h2>
        <p className="contact__card">{company}</p>
        <p className="contact__card">{position}</p>
        <div className="contact__card-info">
          <p className="contact__card">{email}</p>
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
