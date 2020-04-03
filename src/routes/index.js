import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import SignIn from "../pages/SignIn";
import Orders from "../pages/Orders";
import Deliveryman from "../pages/Deliveryman";
import Recipient from "../pages/Recipient";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn}></Route>
      <Route path="/orders" component={Orders} isPrivate></Route>
      <Route path="/deliveryman" component={Deliveryman} isPrivate></Route>
      <Route path="/recipient" component={Recipient} isPrivate></Route>
      {/* rota 404 */}
      <Route path="/" component={() => <h1>404</h1>}></Route>
    </Switch>
  );
}
