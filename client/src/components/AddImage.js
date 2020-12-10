const API_URL = "http://localhost:8080";

export default function AddImage(props) {
  return (
    <section className="addimage">
      <h1 className="addimage__title">UPLOAD IMAGE</h1>
      <img src={props.file} alt="test" />
      <form
        enctype="multipart/form-data"
        className="addimage__form"
        onSubmit={props.submitImage}
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
        <button className="addimage__form-button" type="submit">
          ADD IMAGE
        </button>
      </form>
    </section>
  );
}
