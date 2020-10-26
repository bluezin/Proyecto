import React from "react";
import Nav from "./Nav";
import { Targetita } from "./Targetita";
import "../styles/Ofertas.css"

const Ofertas = () => {
  return (
    <div className="body-ofertas">
      <Nav />
      <h3 className="ofertas">Selecciona tu mejor opción</h3>

      <div>
        <Targetita />
        <Targetita />
        <Targetita />
        <Targetita />
        <Targetita />
        <Targetita />

      </div>
    </div>
  );
};

export default Ofertas;
