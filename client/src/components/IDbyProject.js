import Header from "./Header";
import Footer from "./Footer";
import ProjectById from "./ProjectById";

export default function IDbyProject(props) {
  console.log(props);
  return (
    <section className="project__main">
      <Header getProjectById={props.getProjectById} />
      <section className="project__main-column">
        <div className="project__main-right-column">
          <ProjectById
            data={props.data}
            currentProjectId={props.currentProjectId}
            submitDelete={props.submitDelete}
          />
        </div>
      </section>
      <Footer />
    </section>
  );
}
