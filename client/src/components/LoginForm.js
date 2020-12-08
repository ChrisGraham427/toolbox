const API_URL = "http://localhost:8080";
export default function LoginForm() {
  return (
    <section className="addlogin">
      <form
        encType="multipart/form-data"
        method="POST"
        action={`${API_URL}/contact`}
        className="addlogin__form"
      >
        <label className="addlogin__form-label">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="addlogin__form-input"
        />
        <label className="addlogin-label">Company</label>
        <input
          type="text"
          name="company"
          placeholder="Your Company"
          className="addlogin__form-input"
        />
        <label className="addcontact__form-label">Position</label>
        <input
          type="text"
          name="position"
          placeholder="Your Position"
          className="addlogin__form-input"
        />
        <label className="addcontact__form-label">Email</label>
        <input
          type="email"
          name="email"
          placeholder="someone@somecompany.com"
          className="addlogin__form-input"
        />
        <label className="addcontact__form-label">Phone</label>
        <input
          type="tel"
          name="phone"
          placeholder="(123) 123-4567"
          className="addlogin__form-input"
        />
      </form>
      <div className="addlogin__form-button-div">
        <button className="addlogin__form-button" type="submit">
          CREATE LOGIN
        </button>
      </div>
    </section>
  );
}
