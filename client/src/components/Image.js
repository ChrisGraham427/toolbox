export default function Image(props) {
  const { id, source, description, alt, project_id } = props.data;
  return (
    <li className="image__card" key={project_id}>
      <h2 className="image__card-description">{description}</h2>
      <img className="image__card-image" src={source} alt={alt} />
      <span className="image__card-delete">
        <form
          onSubmit={(event) => {
            props.submitDelete(event, id);
          }}
        >
          <button type="submit">DELETE</button>
        </form>
      </span>
    </li>
  );
}
