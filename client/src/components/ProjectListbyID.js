export default function ProjectById(props) {
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
    <li key={id}>
      <p>{title}</p>
      <p>{description}</p>
      <p>{streetNumber}</p>
      <p>{streetName}</p>
      <p>{city}</p>
      <p>{province}</p>
      <p>{postalCode}</p>
      <p>{contact}</p>
      <p>{startDate}</p>
      <p>{endDate}</p>
      <p>{images}</p>
    </li>
  );
}
