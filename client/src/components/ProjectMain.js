import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";
import ProjectList from "../components/ProjectList";
import AddProject from "../components/AddProject";

export default function ProjectMain(props) {
  console.log(props);
  return (
    <section className="project__main">
      <Header />
      <section className="project__main-column">
        <Aside className="project__main-left-column" />
        <div className="project__main-right-column">
          <AddProject />
          <ProjectList />
        </div>
      </section>
      <Footer />
    </section>
  );
}
