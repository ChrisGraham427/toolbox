import Project from "./Project";

export default function ProjectList(props) {
  const projectList = props.data;
  return (
    <section className="project__container">
      <ul className="project__container-list">
        {projectList.length &&
          projectList.map((project) => {
            return (
              <Project
                key={project.id}
                data={project}
                handleSubmit={props.handleSubmit}
                submitDelete={props.submitDelete}
              />
            );
          })}
      </ul>
    </section>
  );
}
