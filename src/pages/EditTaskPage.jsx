import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Form } from "../components/Form";
import { Loading } from "../components/Loading";

export const EditTaskPage = () => {
  const { id } = useParams();
  const [initialTask, setInitialTask] = useState(null);

  useEffect(() => {
    const fetchInputValue = async () => {
      const rawData = await fetch(
        `https://task-tracker-minu.herokuapp.com/tasks/${id}`
      );
      const jsonData = await rawData.json();

      setInitialTask(jsonData);
    };

    fetchInputValue();
  }, []);

  if (initialTask == null) {
    return <Loading />;
  }

  return (
    <div>
      <Form initialTask={initialTask} id={id} />
    </div>
  );
};
