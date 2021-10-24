import { useForm } from "react-hook-form";

export const EditForm = () => {
  const { register, handleSubmit } = useForm();
  const editData = (data) => {
    //ADD EDIT FETCH
    data.preventDefault;

    fetch("http://localhost:5000/tasks/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("Successfully added task!");
  };

  return (
    <div className="edit-container">
      <div className="editInterface">
        <form
          onSubmit={handleSubmit(editData)}
          autoComplete="off"
          className="edit-form"
        >
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
          <button className="btn-edit-confirm">CONFIRM</button>
        </form>
      </div>
    </div>
  );
};
