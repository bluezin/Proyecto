import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import App from "../App";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={App} />
      </Switch>
    </BrowserRouter>
  );
};

export default Rutas;
