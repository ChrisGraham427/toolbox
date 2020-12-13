import TaskCardById from "./TaskCardById";

export default function TaskById(props) {
  const taskList = props.taskData;
  console.log("taskList", props.currentTaskId);
  return (
    <section className="taskById__container">
      <ul className="taskById__container-list">
        {taskList.length &&
          props.currentTaskId &&
          taskList
            .filter((task) => {
              return task.project_id === parseInt(props.currentTaskId);
            })
            .map((task) => {
              console.log(task);
              return (
                <li key={task.project_id}>
                  <div>
                    <h2>{task.task}</h2>
                    <div></div>
                  </div>
                  <p>{task.description}</p>
                  <div>
                    <p> {task.category}</p>
                  </div>
                  <div>{task.id}</div>
                </li>
              );
            })}
      </ul>
    </section>
  );
}
