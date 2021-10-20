export const TaskCard = (props) => {
  return (
    <div className="taskCard">
      <p className="taskName">{props.name}</p>
      <img src={props.img} />
      <p className="taskTitle">{props.title}</p>
      <p className="taskDescription">{props.description}</p>
      <p className="taskDue">{props.due}</p>
    </div>
  );
};
