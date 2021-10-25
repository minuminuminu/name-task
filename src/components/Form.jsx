import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export const Form = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const submitData = (data) => {
    data.preventDefault;

    fetch("http://localhost:5000/tasks/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("Successfully added task!");
    history.push("/all-tasks");
  };

  return (
    <div className="container-body">
      <div className="container">
        <form onSubmit={handleSubmit(submitData)} autoComplete="off">
          <input {...register("name")} id="name" placeholder="Name" required />
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
