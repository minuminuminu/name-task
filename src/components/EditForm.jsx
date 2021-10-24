import { useForm } from "react-hook-form";
import { useParams } from "react-router";

export const EditForm = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();

  const editData = (data) => {
    data.preventDefault;

    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("Successfully edited task!");
  };

  return (
    <div className="edit-container">
      <div className="editInterface">
        <form
          onSubmit={handleSubmit(editData)}
          autoComplete="off"
          className="edit-form"
        >
          <input
            {...register("name")}
            id="name"
            placeholder="Name"
            required
            value="TEST"
          />
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
