import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";

export const ProfilePage = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const [profiles, setProfiles] = useState([]);

  const submitData = (data) => {
    fetch("https://task-tracker-minu.herokuapp.com/profiles", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("Successfully added profile!");
    history.push("/add-task");
  };

  useEffect(() => {
    const fetchProfiles = async () => {
      const rawProfiles = await fetch(
        "https://task-tracker-minu.herokuapp.com/profiles"
      );
      const jsonProfiles = await rawProfiles.json();

      setProfiles(jsonProfiles);
    };
    fetchProfiles();
  }, []);

  const deleteProfile = (data) => {
    fetch(
      `https://task-tracker-minu.herokuapp.com/profiles/${data.currentProfile}`,
      {
        method: "DELETE",
      }
    );
    alert("Successfully deleted profile!");
    history.push("/add-task");
  };

  const editProfile = (data) => {
    fetch(
      `https://task-tracker-minu.herokuapp.com/profiles/${data.currentProfile}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    alert("Successfully edited profile!");
    history.push("/add-task");
  };

  return (
    <div className="profile-interface">
      <form autoComplete="off" className="profile-container">
        <select {...register("currentProfile")}>
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
          {...register("name")}
          id="profile-name"
          placeholder="Full Name"
          required
        />
        <br />
        <input
          {...register("imageLink")}
          id="profile-pic"
          placeholder="Profile Picture URL"
          required
        />
        <br />
        <button onClick={handleSubmit(submitData)} className="add-p-btn">
          Add profile
        </button>
        <br />
        <button onClick={handleSubmit(deleteProfile)} className="delete-p-btn">
          Delete selected profile
        </button>
        <br />
        <button onClick={handleSubmit(editProfile)} className="edit-p-btn">
          Edit selected profile
        </button>
      </form>
    </div>
  );
};
