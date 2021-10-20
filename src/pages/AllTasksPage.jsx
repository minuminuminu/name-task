import React from "react";
import { TaskCard } from "../components/TaskCard";

export const AllTasksPage = () => {
  const allTasks = [
    {
      id: 1,
      name: "Minu Kim",
      profile_pic:
        "https://upload.wikimedia.org/wikipedia/commons/6/6e/Kim_Jong-un_April_2019_%28cropped%29.jpg",
      title: "Finish Poke-API",
      description: "Finalize styling the Pokedex-Website",
      due: "Tuesday",
    },
    {
      id: 2,
      name: "Isaac Newton",
      profile_pic:
        "https://upload.wikimedia.org/wikipedia/commons/3/3b/Portrait_of_Sir_Isaac_Newton%2C_1689.jpg",
      title: "Invent new stuff",
      description:
        "Come up with unnecessary shit, so Minu has a harder time in school",
      due: "Friday",
    },
    {
      id: 3,
      name: "Isaac Tshilumba",
      profile_pic: "https://i.ytimg.com/vi/ZxhpXG9crE8/hqdefault.jpg",
      title: "League",
      description: "Forget school and come to discord and play with bff Minu",
      due: "Everyday",
    },
    // {
    //   id: 4,
    //   name: "lorem lorem",
    //   title: "lorem",
    //   description:
    //     " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iste commodi voluptate suscipit esse. Quo dolore qui reiciendis, perspiciatis hic recusandae quod dignissimos quasi dolorem id nobis. Odio voluptatum iure nostrum esse unde ad sapiente, nesciunt dignissimos distinctio consequuntur maxime autem optio atque. Voluptates hic ipsum a totam? Beatae, nam.",
    //   due: "Sunday",
    // },
  ];

  return (
    <div className="allTasksPage">
      {allTasks.map((e) => {
        return (
          <TaskCard
            name={e.name}
            img={e.profile_pic}
            title={e.title}
            description={e.description}
            due={e.due}
            key={e.id}
          />
        );
      })}
    </div>
  );
};
