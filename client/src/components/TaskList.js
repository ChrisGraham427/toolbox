import Task from "./Task";

export default function TaskList(props) {
  const taskList = props.data;
  return (
    <section className="task__container">
      <ul className="task__container-list">
        {taskList &&
          taskList.map((task) => {
            return (
              <Task
                key={task.id}
                data={task}
                submitDelete={props.submitDelete}
              />
            );
          })}
      </ul>
    </section>
  );
}
