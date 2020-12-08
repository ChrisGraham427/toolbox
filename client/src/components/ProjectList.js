import Project from "./Project";

export default function ProjectList(props) {
  const projectList = props.data;
  console.log(projectList);
  return (
    <section className="project__container">
      <ul className="project__container-list">
        {projectList &&
          projectList.map((project) => {
            console.log(project);
            return <Project key={project.id} data={project} />;
          })}
      </ul>
    </section>
  );
}
