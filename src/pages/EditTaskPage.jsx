import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Form } from "../components/Form";

export const EditTaskPage = () => {
  const { id } = useParams();
  const [initialTask, setInitialTask] = useState(null);

  useEffect(() => {
    const fetchInputValue = async () => {
      console.log("what is id", id);
      const rawData = await fetch(
        `https://task-tracker-minu.herokuapp.com/tasks/${id}`
      );
      const jsonData = await rawData.json();

      setInitialTask(jsonData);
    };

    fetchInputValue();
  }, []);

  if (initialTask == null) {
    return (
      <div className="full-body center">
        <img src="../../Spinner-1s-200px.svg" />
      </div>
    );
  }

  return (
    <div>
      <Form initialTask={initialTask} id={id} />
    </div>
  );
};
