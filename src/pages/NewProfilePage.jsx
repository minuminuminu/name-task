import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

export const NewProfilePage = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
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

  return (
    <div className="profile-interface">
      <form
        onSubmit={handleSubmit(submitData)}
        autoComplete="off"
        className="profile-container"
      >
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
        <button>Add profile</button>
      </form>
    </div>
  );
};
