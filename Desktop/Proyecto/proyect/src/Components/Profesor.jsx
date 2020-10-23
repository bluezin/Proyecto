import React from "react";
import profesor from "../imagenes/profesor.png";
import "../styles/Profesor.css";
import { Link } from "react-router-dom";

const Profesor = () => {
  return (
    <div className="Profesor">
      <div>
        <h1 className="como">¿Cómo ganar dinero extra en 6 pasos?</h1>
      </div>
      <div className="div-imagen">
        <img src={profesor} alt="" className="imagen-profesor" />
      </div>
      <div className="infoGroup">
        <div className="informacion-profesor">
          <li className="profe-p">Reviso las tareas.</li>
          <li className="profe-p">Selecciono al estudiante que quiero ayudar.</li>
          <li className="profe-p">Establezco mi tárifa y fecha de entrega.</li>
          <li className="profe-p">Desarrollo la tarea.</li>
          <li className="profe-p">La entrego.</li>
          <li className="profe-p">Recibo el pago de mis servicios.</li>
        </div>
        <div className="Button-profesor">
          <Link to="/login">
            <button className="Button-profe">INGRESAR</button>
          </Link>
        </div>
      </div>  
    </div>
  );
};

export default Profesor;
