import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router";
import { useState, useEffect } from "react";

export const EditForm = () => {
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const [initialTask, setInitialTask] = useState(null);
  const [profiles, setProfiles] = useState([]);
  const history = useHistory();

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

  useEffect(() => {
    const fetchProfiles = async () => {
      const rawData = await fetch(
        "https://task-tracker-minu.herokuapp.com/profiles"
      );
      const jsonData = await rawData.json();
      setProfiles(jsonData);
    };

    fetchProfiles();
  }, []);

  const editData = (data) => {
    const newData = JSON.stringify({
      description:
        data.description == "" ? initialTask.description : data.description,
      due: data.due == "" ? initialTask.due : data.due,
      title: data.title == "" ? initialTask.title : data.title,
      profile: parseInt(data.name),
    });

    fetch(`https://task-tracker-minu.herokuapp.com/tasks/${id}`, {
      method: "PUT",
      body: newData,
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("Successfully edited task!");
    history.push("/all-tasks");
  };

  if (initialTask == null || profiles.length == 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-container">
      <div className="editInterface">
        <form
          onSubmit={handleSubmit(editData)}
          autoComplete="off"
          className="edit-form"
        >
          <select
            {...register("name")}
            className="selectField"
            defaultValue={initialTask.profileId}
          >
            {profiles.map((e) => {
              return (
                <option value={e.id} key={e.id}>
                  {e.name}
                </option>
              );
            })}
            <option
              value="dummy_value"
              onClick={() => history.push("/profile-overview")}
            >
              Profile overview...
            </option>
          </select>
          <br />
          <input
            {...register("title")}
            id="title"
            placeholder="Task Title"
            required
            defaultValue={initialTask.title}
          />
          <br />
          <textarea
            {...register("description")}
            id="description"
            placeholder="Task Description"
            required
            defaultValue={initialTask.description}
          />
          <br />
          <input
            {...register("due")}
            id="due"
            placeholder="Due"
            required
            defaultValue={initialTask.due}
          />
          <br />
          <button className="btn-edit-confirm">CONFIRM</button>
        </form>
      </div>
    </div>
  );
};
