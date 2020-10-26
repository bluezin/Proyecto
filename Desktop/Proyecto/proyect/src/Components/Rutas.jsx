import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import App from "../App";
import { Layout } from "./Layout";
import Alumnos from "./Alumnos";
import Profesor from "./Profesor";
import Register from "./Register";
import Home from "./Home";
import Task from "./Task";
import Ofertas from "./Ofertas";
import MisTareas from "./MisTareas";


const Rutas = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={App} />
          <Route exact path="/alumno" component={Alumnos} />
          <Route exact path="/profesor" component={Profesor} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Task" component={Task} />
          <Route exact path="/ofertas" component={Ofertas} />
          <Route exact path="/misTareas" component={MisTareas} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Rutas;
