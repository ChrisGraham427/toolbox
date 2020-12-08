import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";
import ImageList from "../components/ImageList";
import AddImage from "../components/AddImage";

export default function ImageMain() {
  return (
    <section className="image__main">
      <Header />
      <section className="image__main-column">
        <Aside className="image__main-left-column" />
        <div className="image__main-right-column">
          <AddImage />
          <ImageList />
        </div>
      </section>
      <Footer />
    </section>
  );
}
