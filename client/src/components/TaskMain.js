import Aside from "./Aside";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

export default function TaskMain(props) {
  return (
    <section className="task__main">
      <section className="task__main-column">
        <Aside className="task__main-left-column" />
        <div className="task__main-right-column">
          <AddTask handleSubmit={props.handleSubmit} />
          <TaskList data={props.data} submitDelete={props.submitDelete} />
        </div>
      </section>
    </section>
  );
}
