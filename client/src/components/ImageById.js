import ContactCardById from "./ContactCardById";

export default function ImageById(props) {
  const imageList = props.imageData;
  console.log("contactList", imageList);
  return (
    <section className="imageById__container">
      <ul className="imageById__container-list">
        {imageList.length &&
          props.currentImageId &&
          imageList
            .filter((image) => {
              return image.project_id === parseInt(props.currentImageId);
            })
            .map((image) => {
              console.log(image);
              return (
                <li className="image__cardid" key={image.project_id}>
                  <img
                    className="image__cardid-image"
                    src={image.source}
                    alt={image.alt}
                  />
                  <h2 className="image__cardid-description">
                    {image.description}
                  </h2>

                  <span className="image__cardid-delete">
                    {/* <form
                    onSubmit={(event) => {
                      props.submitDelete(event, id);
                    }}
                  >
                    <button type="submit" className="image__card-button"></button>
                  </form> */}
                  </span>
                </li>
              );
            })}
      </ul>
    </section>
  );
}
