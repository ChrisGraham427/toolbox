const API_URL = "http://localhost:8080";

export default function AddContact(props) {
  return (
    <section className="addcontact">
      <h1 className="addcontact__title">MANAGE CONTACTS</h1>
      <form onSubmit={props.handleSubmit} className="addcontact__form">
        <label className="addcontact__form-label">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="addcontact__form-input"
        />
        <label className="addcontact-label">Company</label>
        <input
          type="text"
          name="company"
          placeholder="Your Company"
          className="addcontact__form-input"
        />
        <label className="addcontact__form-label">Position</label>
        <input
          type="text"
          name="position"
          placeholder="Your Position"
          className="addcontact__form-input"
        />
        <label className="addcontact__form-label">Email</label>
        <input
          type="email"
          name="email"
          placeholder="someone@somecompany.com"
          className="addcontact__form-input"
        />
        <label className="addcontact__form-label">Phone</label>
        <input
          type="tel"
          name="phone"
          placeholder="(123) 123-4567"
          className="addcontact__form-input"
        />
        <label className="addcontact__form-label">Project ID</label>
        <input
          type="int"
          name="project_id"
          placeholder="1"
          className="addcontact__form-input"
        />
        <button className="addcontact__form-button" type="submit">
          ADD CONTACT
        </button>
      </form>
      <div className="addcontact__form-button-div"></div>
    </section>
  );
}
