import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Details } from "./pages/Details";
import { Home } from "./pages/Home";
import projects from "./data/projects";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Home projects={projects} />} />
        <Route exact path="/project/:id" component={Details} />
      </Switch>
    </Router>
  );
};
