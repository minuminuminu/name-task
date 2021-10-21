import { useForm } from "react-hook-form";

export const Form = () => {
  const { register, handleSubmit } = useForm();
  const submitData = (data) => {
    fetch(
      "https://person-task-tracker-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitData)}>
        <label htmlFor="name">Name:</label>
        <input {...register("name")} id="name" />
        <label htmlFor="title">Task Title:</label>
        <input {...register("title")} id="title" />
        <label htmlFor="description">Task Description:</label>
        <input {...register("description")} id="description" />
        <label htmlFor="due">Due Date:</label>
        <input {...register("due")} id="due" />
        <button>CLICK ME</button>
      </form>
    </div>
  );
};
