import Project from "./Project";

export default function ProjectById(props) {
  const projectList = props.data;
  console.log("projectList", projectList);
  console.log("currentProjectId", typeof props.currentProjectId);
  return (
    <section className="project__container">
      <ul className="project__container-list">
        {projectList.length &&
          props.currentProjectId &&
          projectList
            .filter((project) => {
              return project.id === parseInt(props.currentProjectId);
            })
            .map((project) => {
              return (
                <Project
                  key={project.id}
                  currentProjectId={props.currentProjectId}
                  data={project}
                />
              );
            })}
      </ul>
    </section>
  );
}
