import ProjectById from "./ProjectById";
import ContactById from "./ContactById";
import TaskById from "./TaskById";
import ImageById from "./ImageById";
export default function IDbyProject(props) {
  console.log(props);
  return (
    <section className="projectid__main">
      <section className="projectid__main-column">
        <div className="projectid__main-left-column">
          <ProjectById
            data={props.data}
            currentProjectId={props.currentProjectId}
            submitDelete={props.submitDelete}
          />
        </div>
        <div className="projectid__main-right-column">
          <ContactById
            className="projectid__main-right-column-contact"
            contactData={props.contactData}
            currentContactId={props.currentContactId}
          />
          <ImageById
            imageData={props.imageData}
            currentImageId={props.currentImageId}
          />
          <TaskById
            taskData={props.taskData}
            currentTaskId={props.currentTaskId}
          />
        </div>
      </section>
    </section>
  );
}
