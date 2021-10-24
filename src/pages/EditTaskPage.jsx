import { useParams } from "react-router";
import { EditForm } from "../components/EditForm";

export const EditTaskPage = () => {
  const { id } = useParams();

  return <EditForm currentId={id} />;
};
