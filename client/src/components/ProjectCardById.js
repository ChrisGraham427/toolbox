export default function ProjectCardById(props) {
  const {
    id,
    title,
    description,
    streetNumber,
    streetName,
    city,
    province,
    postalCode,

    startDate,
    endDate,
  } = props.data;
  return (
    <li className="project__cardid" key={id}>
      <div className="project__cardid-projectid-div-sub">
        <p className="project__cardid-number">PROJECT #</p>
        <p className="project__cardid-number">{id}</p>
      </div>
      <h2 className="project__cardid-title">{title}</h2>
      <div className="project__cardid-projectid-div"></div>
      <p className="project__cardid-description">{description}</p>

      <div className="project__cardid-id-div">
        <div className="project__cardid-address-container">
          <h3 className="project__cardid-address-title">ADDRESS</h3>
          <p className="project__cardid-item-address">
            {streetNumber} {streetName}
          </p>

          <p className="project__cardid-item-address">{city},</p>
          <p className="project__cardid-item-address">{province}</p>
          <p className="project__cardid-item-address">{postalCode}</p>
        </div>
      </div>
      <div className="project__cardid-timeline">
        <p className="project__cardid-item-date">Start Date: {startDate}</p>
        <p className="project__cardid-item-date">End Date: {endDate}</p>
      </div>
    </li>
  );
}
