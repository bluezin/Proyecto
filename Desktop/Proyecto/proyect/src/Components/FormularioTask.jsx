import React, { useEffect } from "react";
import "../styles/FormularioTask.css";
import { useState } from "react";
import clip from "../imagenes/clip.png";

const FormularioTask = () => {
  const [form, setForm] = useState([]);
  const [informacion, setInformacion] = useState({
    data: [],
  });

  const handleChange = (event) => {
    event.preventDefault();
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    setInformacion({
      data: [form],
    });
 
  };

  return (
    <>
      <div className="FormularioTask">
        <div className="div-strong-form">
          <strong className="strong-form">Formulario de Tareas</strong>
        </div>
        <form className="form-Task">
          <div className="div-input">
            <select
              className="input-form"
              name="section"
              onChange={handleChange}
            >
              <option>Seleciona tu carrera</option>
              <option>YTRe</option>
            </select>
            <br />
            <input
              className="input-form"
              placeholder="Titulo de la tarea"
              name="titulo"
              onChange={handleChange}
            />
            <br />
            <input
              className="input-form"
              placeholder="Fecha de entrega dd/mm/aa"
              name="fecha"
              onChange={handleChange}
            />
            <br />
            <input
              className="input-desc"
              placeholder="Description"
              name="description"
              onChange={handleChange}
            />
          </div>

          <br />

          <div className="div-button">
            <button
              type="button"
              className="button-form"
              onClick={handleSubmit}
            >
              Enviar
            </button>
            <p>
              <img src={clip} alt="logo" className="clip" />
              Adjuntar
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormularioTask;
