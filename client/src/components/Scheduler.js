import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

export default function Scheduler(props) {
  console.log("PROPS", props);
  return (
    <div className="App">
      <DnDCalendar
        defaultDate={moment().toDate()}
        defaultView="month"
        events={props.data}
        localizer={localizer}
        moveEvent={props.moveEvent}
        onEventResize={props.onEventResize}
        resizable
        style={{ height: "83.25vh" }}
      />
    </div>
  );
}
