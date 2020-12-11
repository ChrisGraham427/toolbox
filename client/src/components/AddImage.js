const API_URL = "http://localhost:8080";

export default function AddImage(props) {
  return (
    <section className="addimage">
      <h1 className="addimage__title">UPLOAD IMAGE</h1>
      <img src={props.file} alt="test" />
      <form
        encType="multipart/form-data"
        className="addimage__form"
        onSubmit={props.submitImage}
      >
        <label className="addimage__form-label">Title</label>
        <input
          type="text"
          name="description"
          placeholder="Add Image Description"
          className="addimage__form-input"
        />
        <label className="addimage__form-label">Image Description</label>
        <input
          type="text"
          name="title"
          placeholder="Add Image Title"
          className="addimage__form-input"
        />
        <label className="addimage__form-label">File</label>
        <input
          type="file"
          name="image"
          className="addimage__form-input"
          onChange={props.changeImage}
        />
        <label className="addimage__form-label">Project #</label>
        <input type="int" name="project_id" className="addimage__form-input" />
        <button className="addimage__form-button" type="submit">
          ADD IMAGE
        </button>
      </form>
    </section>
  );
}
