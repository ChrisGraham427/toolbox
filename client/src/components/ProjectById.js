import ProjectCardById from "./ProjectCardById";

export default function ProjectById(props) {
  const projectList = props.data;
  console.log("projectList", projectList);
  console.log("currentProjectId", typeof props.currentProjectId);
  return (
    <section className="projectById__container">
      <ul className="projectById__container-list">
        {projectList.length &&
          props.currentProjectId &&
          projectList
            .filter((project) => {
              return project.id === parseInt(props.currentProjectId);
            })
            .map((project) => {
              return (
                <section>
                  <ProjectCardById
                    key={project.id}
                    currentProjectId={props.currentProjectId}
                    data={project}
                  />
                </section>
              );
            })}
      </ul>
    </section>
  );
}
