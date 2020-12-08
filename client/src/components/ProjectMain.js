import Header from "./Header";
import Footer from "./Footer";
import Aside from "./Aside";
import ProjectList from "./ProjectList";
import AddProject from "./AddProject";

export default function ProjectMain(props) {
  console.log(props);
  return (
    <section className="project__main">
      <Header />
      <section className="project__main-column">
        <Aside className="project__main-left-column" />
        <div className="project__main-right-column">
          <AddProject handleSubmit={props.handleSubmit} />
          <ProjectList data={props.data} />
        </div>
      </section>
      <Footer />
    </section>
  );
}
