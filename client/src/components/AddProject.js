const API_URL = "http://localhost:8080";

export default function AddProject() {
  return (
    <section className="addproject">
      <h1 className="addproject__title">MANAGE PROJECTS</h1>
      <form
        encType="multipart/form-data"
        method="POST"
        action={`${API_URL}/project`}
        className="addproject__form"
      >
        <label className="addproject__form-label">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          className="addproject__form-input"
        />
        <label className="addproject-label">Description</label>
        <input
          type="text"
          name="description"
          placeholder="Project Description"
          className="addproject__form-input"
        />
        <label className="addproject__form-label">Street Number</label>
        <input
          type="text"
          name="streetNumber"
          placeholder="Enter Street Number"
          className="addproject__form-input"
        />
        <label className="addproject__form-label">Street Name</label>
        <input
          type="text"
          name="streetName"
          placeholder="Enter Street Name"
          className="addproject__form-input"
        />
        <label className="addproject__form-label">City</label>
        <input
          type="text"
          name="city"
          placeholder="Enter City"
          className="addproject__form-input"
        />
        <label className="addproject__form-label">Province</label>
        <input
          type="text"
          name="province"
          placeholder="Enter Province"
          className="addproject__form-input"
        />
        <label className="addproject__form-label">Postal Code</label>
        <input
          type="text"
          name="postalCode"
          placeholder="Enter Postal Code"
          className="addproject__form-input"
        />
        <label className="addproject__form-label">START DATE</label>
        <input
          type="date"
          name="startDate"
          className="addproject__form-input"
        />
        <label className="addproject__form-label">END DATE</label>
        <input type="date" name="endDate" className="addproject__form-input" />
      </form>
      <div className="addproject__form-button-div">
        <button className="addproject__form-button" type="submit">
          ADD PROJECT
        </button>
        <button className="addproject__form-button" type="edit">
          EDIT PROJECT
        </button>
      </div>
    </section>
  );
}
