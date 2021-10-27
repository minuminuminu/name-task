import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

export const EditProfilePage = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const [profiles, setProfiles] = useState([]);

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

  const submitEdit = (data) => {
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

  const deleteProfile = (data) => {
    fetch(
      `https://task-tracker-minu.herokuapp.com/profiles/${data.currentProfile}`,
      {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    alert("Successfully deleted profile!");
    history.push("/add-task");
  };

  return (
    <div className="edit-profile-container">
      <form className="edit-profile-form">
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
        <input {...register("name")} id="profile-name" placeholder="New Name" />
        <br />
        <input
          {...register("imageLink")}
          id="profile-pic"
          placeholder="New Profile Picture URL"
        />
        <br />
        <button onClick={handleSubmit(submitEdit)}>EDIT PROFILE</button>
        <br />
        <button onClick={handleSubmit(deleteProfile)}>DELETE PROFILE</button>
      </form>
    </div>
  );
};
