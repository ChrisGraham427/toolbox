const API_URL = "http://localhost:8080";

export default function AddTask(props) {
  return (
    <section className="addtask">
      <h1 className="addtask__title">MANAGE TASKS</h1>
      <form onSubmit={props.handleSubmit} className="addtask__form">
        <label className="addtask__form-label">Category</label>
        <select className="addtask__form-select" name="category">
          <option value="">--SELECT TASK CATEGORY--</option>
          <option value="estimate">Estimate</option>
          <option value="scheduling">Scheduling</option>
          <option value="demolition">Demolition</option>
          <option value="framing">Framing</option>
          <option value="painting">Painting</option>
          <option value="drywall">Drywall</option>
          <option value="design">Design</option>
          <option value="changeOrder">Change Order</option>
          <option value="invoice">Invoice</option>
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
