import ProjectById from "./ProjectListbyID";

export default function ProjectList(props) {
  const projectList = props.data;
  return (
    <div>
      <ul>
        {projectList &&
          projectList.map((project) => {
            return <ProjectById key={project.id} data={project} />;
          })}
      </ul>
    </div>
  );
}
