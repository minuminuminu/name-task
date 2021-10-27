import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useParams, useLocation } from "react-router";
import { useState, useEffect } from "react";

export const Form = () => {
  const { register, handleSubmit } = useForm();
  const [profiles, setProfiles] = useState([]);
  const { id } = useParams();
  const [initialTask, setInitialTask] = useState(null);
  let isEdit = false;
  const history = useHistory();
  const location = useLocation();

  if (location.pathname.includes("edit-task")) {
    isEdit = true;
  } else {
    isEdit = false;
  }

  const submitData = (data) => {
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

  if (isEdit) {
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
  }

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

  const submitEdit = (data) => {
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

  if (isEdit) {
    if (initialTask == null) {
      return (
        <div className="full-body center">
          <img src="../../Spinner-1s-200px.svg" />
        </div>
      );
    }
  }

  if (profiles.length == 0) {
    return (
      <div className="full-body center">
        <img src="../../Spinner-1s-200px.svg" />
      </div>
    );
  }

  return (
    <div className="container-body">
      <div className="container">
        <form autoComplete="off">
          <select
            {...register("name")}
            className="selectField"
            defaultValue={isEdit ? initialTask.profileId : null}
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
            defaultValue={isEdit ? initialTask.title : null}
          />
          <br />
          <textarea
            {...register("description")}
            id="description"
            placeholder="Task Description"
            required
            defaultValue={isEdit ? initialTask.description : null}
          />
          <br />
          <input
            {...register("due")}
            id="due"
            placeholder="Due"
            required
            defaultValue={isEdit ? initialTask.due : null}
          />
          <br />
          {isEdit ? (
            <button
              className="btn-edit-confirm"
              onClick={handleSubmit(submitEdit)}
            >
              CONFIRM CHANGES
            </button>
          ) : (
            <button className="btn" onClick={handleSubmit(submitData)}>
              ADD TASK
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
