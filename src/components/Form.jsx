import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Loading } from "./Loading";

export const Form = (props) => {
  const { register, handleSubmit } = useForm();
  const [profiles, setProfiles] = useState([]);
  const history = useHistory();

  const onEdit = (data) => {
    // TODO: change this
    const newData = JSON.stringify({
      description:
        data.description == ""
          ? props.initialTask.description
          : data.description,
      due: data.due == "" ? props.initialTask.due : data.due,
      title: data.title == "" ? props.initialTask.title : data.title,
      profile: parseInt(data.name),
    });

    fetch(`https://task-tracker-minu.herokuapp.com/tasks/${props.id}`, {
      method: "PUT",
      body: newData,
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("Successfully edited task!");
    history.push("/all-tasks");
  };

  const onAdd = (data) => {
    const newData = JSON.stringify({
      description: data.description,
      due: data.due,
      title: data.title,
      profile: Number(data.name),
    });

    fetch("https://task-tracker-minu.herokuapp.com/tasks", {
      method: "POST",
      body: newData,
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("Successfully added task!");
    history.push("/all-tasks");
  };

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

  if (profiles.length == 0) {
    return <Loading />;
  }

  return (
    <div className="container-body">
      <div className="container">
        <form autoComplete="off">
          <select
            {...register("name")}
            className="selectField"
            defaultValue={props.initialTask?.profileId}
          >
            {profiles.map((e) => {
              return (
                <option value={e.id} key={e.id}>
                  {e.name}
                </option>
              );
            })}
          </select>
          <br />
          <input
            {...register("title")}
            id="title"
            placeholder="Task Title"
            required
            defaultValue={props.initialTask?.title}
          />
          <br />
          <textarea
            {...register("description")}
            id="description"
            placeholder="Task Description"
            required
            defaultValue={props.initialTask?.description}
          />
          <br />
          <input
            {...register("due")}
            id="due"
            placeholder="Due"
            required
            defaultValue={props.initialTask?.due}
          />
          <br />
          {props.id ? (
            <button className="btn-edit-confirm" onClick={handleSubmit(onEdit)}>
              CONFIRM CHANGES
            </button>
          ) : (
            <button className="btn" onClick={handleSubmit(onAdd)}>
              ADD TASK
            </button>
          )}
          <br />
          <button
            className="profile-ovw-btn"
            onClick={() => history.push("/profile-overview")}
          >
            PROFILE OVERVIEW
          </button>
        </form>
      </div>
    </div>
  );
};
