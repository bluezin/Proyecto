import React from "react";
import "../styles/FormularioTask.css";

const FormularioTask = () => {
  return (
    <div className="FormularioTask">
      <div className="div-strong-form">
        <strong className="strong-form">Formulario de Tareas</strong>
      </div>

      <form className="form-Task">
        <div className="div-input">
          <select className="input-form">
            <option>Seleciona tu carrera</option>
            <option>YTRe</option>
          </select>
          <br />
          <input className="input-form" placeholder="Titulo de la tarea" />
          <br />
          <input
            className="input-form"
            placeholder="Fecha de entrega dd/mm/aa"
          />
          <br />
          <input className="input-desc" placeholder="Description" />
        </div>

        <br />

        <div className="div-button">
          <button type="button" className="button-form">Enviar</button>
          <p>Adjuntar</p>
        </div>
      </form>
    </div>
  );
};

export default FormularioTask;
