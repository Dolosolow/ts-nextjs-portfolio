import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./components/app";
import projects from "./data/projects";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <App projects={projects} />} />
        <Route exact path="/project/:id" component={() => <App projects={projects} />} />
      </Switch>
    </Router>
  );
};
