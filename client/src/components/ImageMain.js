import Header from "./Header";
import Footer from "./Footer";
import Aside from "./Aside";
import ImageList from "./ImageList";
import AddImage from "./AddImage";

export default function ImageMain(props) {
  return (
    <section className="image__main">
      <Header />
      <section className="image__main-column">
        <Aside className="image__main-left-column" />
        <div className="image__main-right-column">
          <AddImage />
          <ImageList data={props.data} />
        </div>
      </section>
      <Footer />
    </section>
  );
}
