import { NavBar } from "./components/NavBar";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { AllTasksPage } from "./pages/AllTasksPage";
import { AddTaskPage } from "./pages/AddTaskPage";
import { HomePage } from "./pages/HomePage";
import { ProfilePage } from "./pages/ProfilePage";
import { EditTaskPage } from "./pages/EditTaskPage";

function App() {
  return (
    <div className="full-body">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/add-task">
            <AddTaskPage />
          </Route>
          <Route path="/all-tasks">
            <AllTasksPage />
          </Route>
          <Route path="/edit-task/:id">
            <EditTaskPage />
          </Route>
          <Route path="/profile-overview">
            <ProfilePage />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
