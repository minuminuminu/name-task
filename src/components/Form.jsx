import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

export const Form = () => {
  const { register, handleSubmit } = useForm();
  const [profiles, setProfiles] = useState([]);
  const history = useHistory();
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

  return (
    <div className="container-body">
      <div className="container">
        <form onSubmit={handleSubmit(submitData)} autoComplete="off">
          <select {...register("name")} className="selectField">
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
          />
          <br />
          <textarea
            {...register("description")}
            id="description"
            placeholder="Task Description"
            required
          />
          <br />
          <input {...register("due")} id="due" placeholder="Due" required />
          <br />
          <button className="btn">ADD TASK</button>
        </form>
      </div>
    </div>
  );
};
