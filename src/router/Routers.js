import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../component/layout/auth/Login";
import Register from "../component/layout/auth/Register";

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};

export default Routers;
