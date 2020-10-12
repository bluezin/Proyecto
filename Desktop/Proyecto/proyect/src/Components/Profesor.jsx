import React from "react";
import poligono from "../imagenes/poligono.png";
import profesor from "../imagenes/profesor.png";
import "../styles/Profesor.css";

const Profesor = () => {
  return (
    <div className="Profesor">
      <div className="div-imagen">
        <img src={poligono} alt="poligono" className="poligono" />
        <img src={profesor} alt="" className="imagen-profesor" />
        <p className="profesor-parrafo">Profesor</p>
      </div>
      <div className="informacion-profesor">
        <h1>Como ganar dinero extra en 6 pasos</h1>
        <p>Reviso las tareas</p>
        <p>Selecciono al estudiante que quiero ayudar</p>
        <p>Ofresco mi tarifa</p>
        <p>Ayudo en la tarea</p>
        <p>La entrego</p>
        <p>Recibo el pago de mis servicios</p>
      </div>

      <div className="Button-profe">
        <button className="Button-profe">INGRESAR</button>
      </div>
    </div>
  );
};

export default Profesor;
