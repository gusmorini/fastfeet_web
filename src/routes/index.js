import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn}></Route>
      <Route path="/register" component={SignUp}></Route>
      <Route path="/dashboard" component={Dashboard} isPrivate></Route>
      <Route path="/profile" component={Profile} isPrivate></Route>
      {/* rota 404 */}
      <Route path="/" component={() => <h1>404</h1>}></Route>
    </Switch>
  );
}
