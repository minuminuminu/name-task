import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Confirmation } from "../components/Confirmation";
import { Loading } from "../components/Loading";
import { TaskCard } from "../components/TaskCard";

export const AllTasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const router = useHistory();

  useEffect(() => {
    const getTasks = async () => {
      const firebaseTasks = await fetchTasks();
      setTasks(firebaseTasks);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const results = await fetch(
      "https://task-tracker-minu.herokuapp.com/tasks"
    );
    const meetups = [];

    const data = await results.json();
    for (const key in data) {
      const meetup = {
        id: key,
        ...data[key],
      };
      meetups.push(meetup);
    }

    return meetups;
  };

  const onDelete = async (id) => {
    await fetch(`https://task-tracker-minu.herokuapp.com/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onEditClick = (id) => {
    router.push(`/edit-task/${id}`);
  };

  return (
    <div className="allTasksContainer">
      <div className="allTasksPage">
        {tasks.map((e) => {
          return (
            <TaskCard
              name={e.profile.name}
              // img={e.profile_pic}
              title={e.title}
              description={e.description}
              due={e.due}
              key={e.id}
              id={e.id}
              onDelete={onDelete}
              showEdit={() => onEditClick(e.id)}
            />
          );
        })}
      </div>
    </div>
  );
};
