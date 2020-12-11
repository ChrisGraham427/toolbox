export default function Task(props) {
  const { category, task, description, project_id, id } = props.data;
  return (
    <li className="task__card" key={project_id}>
      <section className="task__card-main">
        <h2 className="task__card-name">{task}</h2>
        <p className="task__card">{category}</p>
        <p className="task__card">{description}</p>
        <form
          onSubmit={(event) => {
            props.submitDelete(event, id);
          }}
        >
          <button type="submit" className="task__card-button">
            DELETE
          </button>
        </form>
      </section>
    </li>
  );
}
