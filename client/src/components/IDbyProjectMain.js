import ProjectById from "./ProjectById";

export default function IDbyProject(props) {
  console.log(props);
  return (
    <section className="projectid__main">
      <section className="projectid__main-column">
        <div className="projectid__main-left-column">
          <ProjectById
            contactData={props.contactData}
            data={props.data}
            currentContactId={props.currentContactId}
            currentProjectId={props.currentProjectId}
            submitDelete={props.submitDelete}
          />
        </div>
      </section>
    </section>
  );
}
