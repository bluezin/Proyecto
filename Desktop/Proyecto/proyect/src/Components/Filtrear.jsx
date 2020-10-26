import React from "react";
import { FiFilter } from "react-icons/fi";
import "../styles/Filtrear.css";

const Filtrear = ({ handleClose }) => {
  return (
    <div className="filtrear">
      <h4 className="color-Nav-h5">
        <FiFilter
          style={{ fontSize: 20, color: "black" }}
          className="FiFilter heartbeat"
          onClick={handleClose}
        />
      </h4>
      <p className="por-tipo">Por tipo:</p>
      <br />
      <div>
        <div className="checkbox">
          <input className="checkbox_input" type="checkbox" />
          <p className="">Presentacion PPT</p>
        </div>
        <div className="checkbox">
          <input className="checkbox_input" type="checkbox" />
          <p className="">Matematica</p>
        </div>

        <div className="checkbox">
          <input className="checkbox_input" type="checkbox" />
          <p className="">Resumen</p>
        </div>

        <div className="checkbox">
          <input className="checkbox_input" type="checkbox" />
          <p className="">Reporte</p>
        </div>

        <div className="checkbox">
          <input className="checkbox_input" type="checkbox" />
          <p className="">Traduccion</p>
        </div>

        <div className="checkbox">
          <input className="checkbox_input" type="checkbox" />
          <p className="">Proyecto de investigacion</p>
        </div>

        <div className="checkbox">
          <input className="checkbox_input" type="checkbox" />
          <p className="">Ensayo</p>
        </div>
      </div>

      <div>
        <br />
        <p className="por-carrera">Por Carrera: </p>
        <br />
        <div className="checkbox">
          <input className="checkbox_input" type="checkbox" />
          <p className="">Administracion y Marketing</p>
        </div>

        <div className="checkbox">
          <input className="checkbox_input" type="checkbox" />
          <p className="">Arquitectura</p>
        </div>

        <div className="checkbox">
          <input className="checkbox_input" type="checkbox" />
          <p className="">Contabilidad</p>
        </div>

        <div className="checkbox">
          <input className="checkbox_input" type="checkbox" />
          <p className="">Derecho</p>
        </div>

        <div className="checkbox">
          <input className="checkbox_input" type="checkbox" />
          <p className="">Psicologia</p>
        </div>

        <div className="checkbox">
          <input className="checkbox_input" type="checkbox" />
          <p className="">Inginieras</p>
        </div>
      </div>

      <div className="filtrear-buton-div">
        <button className="Buton-filter">FILTREAR</button>
      </div>
      <br />
      <div className="div-restaurar">
        <strong className="restaurar">Restaurar filtro</strong>
      </div>
    </div>
  );
};

export default Filtrear;
