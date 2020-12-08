export default function Project(props) {
  const {
    id,
    title,
    description,
    streetNumber,
    streetName,
    city,
    province,
    postalCode,
    contact,
    images,
    startDate,
    endDate,
  } = props.data;
  return (
    <li className="project__card" key={id}>
      <h2 className="project__card-title">{title}</h2>
      <p className="project__card-description">{description}</p>
      <div className="project__card-address-container">
        <h3 className="project__card-address-title">ADDRESS</h3>
        <p className="project__card-item-address-yellow">
          {streetNumber} {streetName}
        </p>

        <p className="project__card-item-address">{city}</p>
        <p className="project__card-item-address">{province}</p>
        <p className="project__card-item-address">{postalCode}</p>
      </div>
      <div className="project__card-timeline">
        <p className="project__card-item">Start Date: {startDate}</p>
        <p className="project__card-item">Est. End Date: {endDate}</p>
      </div>
      <form>
        <button className="project__card-button">EDIT</button>
      </form>
      <span>
        {contact}
        {images}
      </span>
    </li>
  );
}
