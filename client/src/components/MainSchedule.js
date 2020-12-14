import Scheduler from "../components/Scheduler";

export default function MainSchedule(props) {
  console.log("SCHEDULE", props.data);
  return (
    <section>
      <Scheduler
        onEventResize={props.onEventResize}
        moveEvent={props.moveEvent}
        data={props.data}
      />
    </section>
  );
}
//
