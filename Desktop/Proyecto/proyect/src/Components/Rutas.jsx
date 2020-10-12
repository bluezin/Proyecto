import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import App from "../App";
import { Layout } from "./Layout";
import Task from "./Task";
import Profesor from "./Profesor";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={App} />
          <Route exact path="/alumno" component={Task} />
          <Route exact path="/profesor" component={Profesor} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Rutas;
