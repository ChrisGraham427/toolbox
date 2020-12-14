export default function Image(props) {
  const { id, source, description, alt, project_id } = props.data;
  return (
    <li className="image__card" key={project_id}>
      <img className="image__card-image" src={source} alt={alt} />

      <div className="image__card-div">
        <h2 className="image__card-description">{description}</h2>

        <div class="image__card-div-id">
          <p className="image__card-projecttitle">PROJECT # </p>
          <p className="image__card-projectid">{project_id}</p>
        </div>
        <span className="image__card-delete">
          <form
            onSubmit={(event) => {
              props.submitDelete(event, id);
            }}
          >
            <button type="submit" className="image__card-button"></button>
          </form>
        </span>
      </div>
    </li>
  );
}
