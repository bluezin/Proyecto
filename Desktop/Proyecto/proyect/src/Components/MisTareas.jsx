import React from "react";
import Nav from "./Nav";
import { Targetita } from "./Targetita";
import "../styles/MisTareas.css";

const MisTareas = () => {
  return (
    <div>
      <Nav />
      <h3 className="h3-mistareas">Revisa tus tareas</h3>
      <div className="targetita-center">
        <div>
          <h5 className="revisa">Tareas en desarrollo</h5>

          <div className="separacion-targetita">
            <Targetita />
            <Targetita />
          </div>
        </div>

        <div>
          <h5 className="revisa">Tareas creadas</h5>
          <div className="separacion-targetita">
            <Targetita />
            <Targetita />
            <Targetita />
          </div>
        </div>
        <div>
          <h5 className="revisa">Tareas entregadas</h5>
          <div className="separacion-targetita">
            <Targetita />
            <Targetita />
            <Targetita />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MisTareas;
