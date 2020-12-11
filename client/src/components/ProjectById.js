import Project from "./Project";

export default function ProjectById(props, id) {
  const projectList = props.data;
  return (
    <section className="project__container">
      <ul className="project__container-list">
        {projectList.length &&
          projectList
            .filter((project) => {
              return project.id === props.id;
            })
            .map((project) => {
              return (
                <Project
                  key={project.id}
                  currentProjectId={props.currentProjectId}
                  data={project.id}
                />
              );
            })}
      </ul>
    </section>
  );
}
