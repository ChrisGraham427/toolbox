export default function ContactCardById(props) {
  const { title, source, alt, project_id } = props.contactData;
  return (
    <li className="project__cardid" key={project_id}>
      <div className="project__cardid-projectid-div">
        <h2 className="project__cardid-title">{source}</h2>
        <div className="project__cardid-projectid-div-sub"></div>
      </div>
      <p className="project__cardid-description">{alt}</p>
      <div className="project__cardid-timeline">
        <p className="project__cardid-item-date"> {title}</p>
      </div>
      <div className="project__card-id-div"></div>
    </li>
  );
}
