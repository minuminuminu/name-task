import { useState, useEffect } from "react";
import { TaskCard } from "../components/TaskCard";
import { EditForm } from "../components/EditForm";

export const AllTasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const firebaseTasks = await fetchTasks();
      setTasks(firebaseTasks);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const results = await fetch("http://localhost:5000/tasks");
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
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onEditClick = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div className="allTasksContainer">
      {showEdit ? (
        <EditForm />
      ) : (
        <div className="allTasksPage">
          {tasks.map((e) => {
            return (
              <TaskCard
                name={e.name}
                // img={e.profile_pic}
                title={e.title}
                description={e.description}
                due={e.due}
                key={e.id}
                id={e.id}
                onDelete={onDelete}
                showEdit={onEditClick}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
// const allTasks = [
// {
//   id: 1,
//   name: "Minu Kim",
//   profile_pic:
//     "https://upload.wikimedia.org/wikipedia/commons/6/6e/Kim_Jong-un_April_2019_%28cropped%29.jpg",
//   title: "Finish Poke-API",
//   description: "Finalize styling the Pokedex-Website",
//   due: "Tuesday",
// },
// {
//   id: 2,
//   name: "Isaac Newton",
//   profile_pic:
//     "https://upload.wikimedia.org/wikipedia/commons/3/3b/Portrait_of_Sir_Isaac_Newton%2C_1689.jpg",
//   title: "Invent new stuff",
//   description:
//     "Come up with unnecessary shit, so Minu has a harder time in school",
//   due: "Friday",
// },
// {
//   id: 3,
//   name: "Isaac Tshilumba",
//   profile_pic: "https://i.ytimg.com/vi/ZxhpXG9crE8/hqdefault.jpg",
//   title: "League",
//   description: "Forget school and come to discord and play with bff Minu",
//   due: "Everyday",
// },
// {
//   id: 4,
//   name: "lorem lorem",
//   title: "lorem",
//   description:
//     " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iste commodi voluptate suscipit esse. Quo dolore qui reiciendis, perspiciatis hic recusandae quod dignissimos quasi dolorem id nobis. Odio voluptatum iure nostrum esse unde ad sapiente, nesciunt dignissimos distinctio consequuntur maxime autem optio atque. Voluptates hic ipsum a totam? Beatae, nam.",
//   due: "Sunday",
// },
// ];
