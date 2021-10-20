import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navBar">
      <ul>
        <Link to={"/"}>
          <li className="left-float">Task Tracker</li>
        </Link>
        {/* Left-side: Home redirect */}
        <Link to={"/all-tasks"}>
          <li className="right-float">All Tasks</li>
        </Link>
        {/* Right-side: All Tasks with Person filter */}
        <Link to={"/add-task"} style={{ textDecoration: "none" }}>
          <li className="right-float">Add Task</li>{" "}
          {/* Right-side: Add Tasks */}
        </Link>
      </ul>
    </div>
  );
};
