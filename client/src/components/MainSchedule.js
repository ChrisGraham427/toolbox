import Scheduler from "../components/Scheduler";

export default function MainSchedule(props) {
  return (
    <section>
      <Scheduler
        onEventResize={props.onEventResize}
        onEventDrop={props.onEventDrop}
        data={props.data}
      />
    </section>
  );
}
//
