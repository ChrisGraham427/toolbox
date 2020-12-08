import Calendar from "tui-calendar"; /* ES6 */
import "tui-calendar/dist/tui-calendar.css";

// // If you use the default popups, use this.
// import "tui-date-picker/dist/tui-date-picker.css";
// import "tui-time-picker/dist/tui-time-picker.css";
export default function Scheduler() {
  var calendar = new Calendar("#calendar", {
    defaultView: "day",
    taskView: true,
    template: {
      monthDayname: function (dayname) {
        console.log(dayname.label);
        return (
          <div id="calendar" style="height:50px;">
            <span class="calendar-week-dayname-name">{dayname.label}</span>
          </div>
        );
      },
    },
  });
}
// return (
//     <section className="scheduler__main">
//       <Header />
//       <section className="scheduler__main-column">
//         <Aside className="scheduler__main-left-column" />
//         <div className="scheduler__main-right-column">
//           <div id="calendar" style="height:800px;">
//             <Calendar />
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </section>
//   );
