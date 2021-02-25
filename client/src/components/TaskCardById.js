export default function TaskCardById(props) {
  console.log("PROPS CHECK", props.task);
  const { category, task, project_id } = props.task;
  return (
    <li key={project_id}>
      <div>
        <div className="project__cardid-projectid-div-sub"></div>
      </div>
      <p className="project__cardid-description">{category}</p>
      <div className="project__cardid-timeline">
        <p className="project__cardid-item-date"> {task}</p>
      </div>
    </li>
  );
}
