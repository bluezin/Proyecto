import React from "react";
import FormularioTask from "./FormularioTask";
import { BsCheckCircle, BsFillXCircleFill } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import "../styles/Task.css";
import TaskImagen from "../imagenes/task.png";

const Task = () => {
  return (
    <div className="Task-body">

      <div className="div-strong">
        <strong className="strong_Task">Muro de tareas</strong>
        <strong className="strong_Task">Mis Tareas</strong>
      </div>

      <div className="div-color-Task">
        <h4 className="color-Task-h4">Envia tu tarea</h4>
        <h4 className="color-Task-h5">
          Filtrar <FiFilter style={{ fontSize: 20 }} className="FIFilter" />
        </h4>
      </div>

      <p className="p-Task">
        <BsFillXCircleFill
          style={{
            color: "#16beff",
            fontSize: 20,
          }}
          className="BsFillXCircleFill"
        />
        Crea una solicitud de tarea
      </p>

      <div className="datos-Task">
        <p className="datos-p">
          <BsCheckCircle className="BsCheckCircle" /> Completa el Formulario
        </p>
        <p className="datos-p">
          <BsCheckCircle className="BsCheckCircle" /> Espera las ofertas
        </p>
        <p className="datos-p">
          <BsCheckCircle className="BsCheckCircle" /> Selecciona tu mejor opcion
        </p>
        <p className="datos-p">
          <BsCheckCircle className="BsCheckCircle" /> Disfruta de tu tiempo
        </p>
        <img className="datos-img" src={TaskImagen} alt="imagen" />
      </div>
      <FormularioTask />
    </div>
  );
};

export default Task;
