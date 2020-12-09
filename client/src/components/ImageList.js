import Image from "./Image";

export default function ImageList(props) {
  const imageList = props.data;
  console.log(imageList);
  return (
    <section className="image__container">
      <h2 className="image__container-title">IMAGE GALLERY</h2>
      <ul className="image__container-list">
        {imageList &&
          imageList.map((image) => {
            console.log(image);
            return <Image key={image.id} data={image} />;
          })}
      </ul>
    </section>
  );
}
