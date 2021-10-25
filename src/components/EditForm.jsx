import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router";
import { useState, useEffect } from "react";

export const EditForm = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const [nameVal, setNameVal] = useState(null);
  const [descriptionVal, setDescriptionVal] = useState(null);
  const [titleVal, setTitleVal] = useState(null);
  const [dueVal, setDueVal] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchInputValue = async () => {
      const rawData = await fetch(`http://localhost:5000/tasks/${id}`);
      const jsonData = await rawData.json();

      setNameVal(jsonData.name);
      setTitleVal(jsonData.title);
      setDescriptionVal(jsonData.description);
      setDueVal(jsonData.due);
    };

    fetchInputValue();
  }, []);

  const editData = (data) => {
    data.preventDefault;
    if (data.name == "") {
      data.name = nameVal;
    }
    if (data.description == "") {
      data.description = descriptionVal;
    }
    if (data.due == "") {
      data.due = dueVal;
    }
    if (data.title == "") {
      data.title = titleVal;
    }

    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("Successfully edited task!");
    history.push("/all-tasks");
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
            defaultValue={nameVal}
          />
          <br />
          <input
            {...register("title")}
            id="title"
            placeholder="Task Title"
            required
            defaultValue={titleVal}
          />
          <br />
          <textarea
            {...register("description")}
            id="description"
            placeholder="Task Description"
            required
            defaultValue={descriptionVal}
          />
          <br />
          <input
            {...register("due")}
            id="due"
            placeholder="Due"
            required
            defaultValue={dueVal}
          />
          <br />
          <button className="btn-edit-confirm">CONFIRM</button>
        </form>
      </div>
    </div>
  );
};
