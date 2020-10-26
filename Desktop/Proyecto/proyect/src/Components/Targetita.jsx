import React from "react";
import idProfe from "../imagenes/id-profesor.png";
import idPesos from "../imagenes/cash.png";
import idTime from "../imagenes/time.png";
import "../styles/Targetita.css";

export const Targetita = () => {
  return (
    <div className="targetita" id="di">
      <div className="id-profe">
        <img src={idProfe} alt="logo" />
        <p className="p-id-profe">Profesor X</p>
      </div>
      <h3 className="h3-targetita">
        Ensayo evolución de <br /> la informatica
      </h3>

      <div className="data">
        <h6>
          <img src={idTime} alt="logo" className="time" />
          25/11/20
        </h6>
        <h6>
          <img src={idPesos} alt="logo" className="time pesos" />
          s/ 68.00
        </h6>
      </div>
      <br />

      <div className="button-targe">
        <button className="button-elegir">ELEGIR</button>
      </div>
    </div>
  );
};
