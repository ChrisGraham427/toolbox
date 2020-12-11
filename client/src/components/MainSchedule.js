import Header from "../components/Header";
import Footer from "../components/Footer";
import Scheduler from "../components/Scheduler";

export default function MainSchedule(props) {
  return (
    <section>
      <Header />
      <Scheduler
        onEventResize={props.onEventResize}
        onEventDrop={props.onEventDrop}
        data={props.data}
      />
      <Footer />
    </section>
  );
}
//
