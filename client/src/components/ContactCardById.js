export default function ContactCardById(props) {
  console.log("PROPS CHECK", props.contact);
  const {
    phone,
    email,

    company,
    position,
    project_id,
    id,
  } = props.contact;
  return (
    <li key={project_id}>
      <div>
        <h2>{props.name}</h2>
        <div className="project__cardid-projectid-div-sub"></div>
      </div>
      <p className="project__cardid-description">{company}</p>
      <div className="project__cardid-timeline">
        <p className="project__cardid-item-date"> {position}</p>
        <p className="project__cardid-item-date"> {phone}</p>
        <p className="project__cardid-item-date"> {email}</p>
      </div>
      <div className="project__card-id-div">{id}</div>
    </li>
  );
}
