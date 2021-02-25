// export default function TaskById(props) {
//   const taskList = props.taskData;
//   console.log("taskList", props.currentTaskId);
//   return (
//     <section className="taskById__container">
//       <h2 className="taskById__container-title">TASKS TO COMPLETE</h2>
//       <ul className="taskById__container-list">
//         {taskList.length &&
//           props.currentTaskId &&
//           taskList
//             .filter((task) => {
//               return task.project_id === parseInt(props.currentTaskId);
//             })
//             .map((task) => {
//               console.log(task);
//               return (
//                 <li className="task__cardid" key={task.project_id}>
//                   <div>
//                     <h2 className="task__cardid-title">{task.task}</h2>
//                     <div></div>
//                   </div>
//                   <p className="task__cardid-description">{task.description}</p>
//                   <div>
//                     <p className="task__cardid-description"> {task.category}</p>
//                   </div>
//                   <form
//                     onSubmit={(event) => {
//                       props.submitDelete(event, task.id);
//                     }}
//                   >
//                     <button
//                       type="submit"
//                       className="task__cardid-button"
//                     ></button>
//                   </form>
//                 </li>
//               );
//             })}
//       </ul>
//     </section>
//   );
// }
