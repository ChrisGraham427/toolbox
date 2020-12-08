const API_URL = "http://localhost:8080";

export default function AddContact() {
  return (
    <section className="addcontact">
      <h1 className="addcontact__title">MANAGE CONTACTS</h1>
      <form
        encType="multipart/form-data"
        method="POST"
        action={`${API_URL}/contact`}
        className="addcontact__form"
      >
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
      </form>
      <div className="addcontact__form-button-div">
        <button className="addcontact__form-button" type="submit">
          ADD CONTACT
        </button>
        <button className="addcontact__form-button" type="edit">
          EDIT CONTACT
        </button>
      </div>
    </section>
  );
}
