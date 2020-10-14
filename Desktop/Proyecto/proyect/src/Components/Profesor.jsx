import React from "react";
// import poligono from "../imagenes/poligono.png";
import profesor from "../imagenes/profesor.png";
import "../styles/Profesor.css";
import { Link } from "react-router-dom";

const Profesor = () => {
  return (
    <div className="Profesor">
      <div className="informacion-profesor">
        <h1 className="como">Como ganar dinero extra en 6 pasos</h1>
        <li className="profe-p">Reviso las tareas</li>
        <li className="profe-p">Selecciono al estudiante que quiero ayudar</li>
        <li className="profe-p">Ofresco mi tarifa</li>
        <li className="profe-p">Ayudo en la tarea</li>
        <li className="profe-p">La entrego</li>
        <li className="profe-p">Recibo el pago de mis servicios</li>
      </div>
      <div className="div-imagen">
        <img src={profesor} alt="" className="imagen-profesor" />
      </div>
      <div className="Button-profesor">
        <Link to="/login">
          <button className="Button-profe">INGRESAR</button>
        </Link>
      </div>
    </div>
  );
};

export default Profesor;
