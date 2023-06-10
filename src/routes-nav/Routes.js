import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import ProjectList from "../projects/ProjectList"
import Resume from "../resume/Resume";

// Site-wide routes.
// Visiting a non-existant route redirects to the homepage.

function Routes() {
    return (
        <div className="pt-5">
        <Switch>

          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/projects">
            <ProjectList/>
          </Route>

          <Route exact path="/resume">
            <Resume/>
          </Route>

          <Redirect to="/" />
        </Switch>
      </div>
    )
}

export default Routes;