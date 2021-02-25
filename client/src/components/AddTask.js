export default function AddTask(props) {
  return (
    <section className="addtask">
      <h1 className="addtask__title">CREATE TASKS</h1>
      <form onSubmit={props.handleSubmit} className="addtask__form">
        <label className="addtask__form-label">Category</label>
        <select className="addtask__form-select" name="category">
          <option value="">--SELECT TASK CATEGORY--</option>
          <option value="Estimate">Estimate</option>
          <option value="Scheduling">Scheduling</option>
          <option value="Demolition">Demolition</option>
          <option value="Framing">Framing</option>
          <option value="Painting">Painting</option>
          <option value="Drywall">Drywall</option>
          <option value="Design">Design</option>
          <option value="Change Order">Change Order</option>
          <option value="Invoice">Invoice</option>
        </select>
        <label className="addtask__form-label">Task</label>
        <input type="text" name="task" className="addtask__form-input" />
        <label className="addtask__form-label">Description</label>
        <textarea name="description" className="addtask__form-textarea" />
        <label className="addtask__form-label">Project #</label>
        <input type="int" name="project_id" className="addtask__form-input" />
        <div className="addtask__form-button-div">
          <button className="addtask__form-button" type="submit">
            CREATE TASK
          </button>
        </div>
      </form>
    </section>
  );
}
