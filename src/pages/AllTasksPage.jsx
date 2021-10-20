import React from "react";
import { TaskCard } from "../components/TaskCard";

export const AllTasksPage = () => {
  const allTasks = [
    {
      name: "Minu Kim",
      profile_pic:
        "https://de.wikipedia.org/wiki/Kim_Jong-un#/media/Datei:Kim_Jong-un_April_2019_(cropped).jpg",
      title: "Finish Poke-API",
      description: "Finalize styling the Pokedex-Website",
      due: "Tuesday",
    },
    {
      name: "Isaac Newton",
      profile_pic:
        "https://en.wikipedia.org/wiki/Isaac_Newton#/media/File:Portrait_of_Sir_Isaac_Newton,_1689.jpg",
      title: "Invent new stuff",
      description:
        "Come up with unnecessary shit, so Minu has a harder time in school",
      due: "Friday",
    },
    {
      name: "Isaac Tshilumba",
      profile_pic: "https://i.ytimg.com/vi/ZxhpXG9crE8/hqdefault.jpg",
      title: "League",
      description: "Forget school and come to discord and play with bff Minu",
      due: "Everyday",
    },
  ];

  return <div></div>;
};
