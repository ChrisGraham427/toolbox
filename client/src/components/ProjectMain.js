import Aside from "./Aside";
import ProjectList from "./ProjectList";
import AddProject from "./AddProject";

export default function ProjectMain(props) {
  console.log(props);
  return (
    <section className="project__main">
      <section className="project__main-column">
        <Aside className="project__main-left-column" />
        <div className="project__main-right-column">
          <AddProject handleSubmit={props.handleSubmit} />
          <ProjectList data={props.data} submitDelete={props.submitDelete} />
        </div>
      </section>
    </section>
  );
}
