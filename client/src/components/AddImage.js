const API_URL = "http://localhost:8080";

export default function AddImage() {
  return (
    <section className="addimage">
      <h1 className="addimage__title">UPLOAD IMAGE</h1>
      <form
        encType="multipart/form-data"
        method="POST"
        action={`${API_URL}/upload`}
        className="addimage__form"
      >
        <label className="addimage__form-label">Description</label>
        <input
          type="text"
          name="description"
          placeholder="Add Image Description"
          className="addimage__form-input"
        />
        <label className="addimage-label">Image Title</label>
        <input
          type="text"
          name="alt"
          placeholder="Add Image Title"
          className="addimage__form-input"
        />
        <label className="addimage__form-label">File</label>
        <input type="file" name="file" className="addimage__form-input" />
      </form>
      <button className="addimage__form-button" type="submit">
        ADD IMAGE
      </button>
    </section>
  );
}
