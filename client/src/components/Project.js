import { Link } from "react-router-dom";
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
    // <Link to={`/project/${id}`}>
    <li className="project__card" key={id}>
      <h2 className="project__card-title">{title}</h2>
      {/* <p className="project__card-description">{description}</p> */}
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
      <div className="project__card-id-div">
        <p className="project__card-id">PROJECT #</p>
        <p className="project__card-id">{id}</p>
      </div>
      <form
        onSubmit={(event) => {
          props.submitDelete(event, id);
        }}
      >
        <button type="submit" className="project__card-button"></button>
      </form>
    </li>
    // </Link>
  );
}
