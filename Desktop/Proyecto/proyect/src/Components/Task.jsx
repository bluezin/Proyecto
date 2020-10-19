import React from "react";
import FormularioTask from "./FormularioTask";
import { BsCheckCircle, BsFillXCircleFill } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import "../styles/Task.css";
import TaskImagen from "../imagenes/task.png";

const Task = () => {
  return (
<<<<<<< HEAD
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
=======
    <div className="Task">
      <div>
        <div className="div-student">
          <h1 className="informacion-como">¿Cómo solucionar mis tareas en 6 pasos?</h1>
        </div>
        <div className="task-Imag">
          <img src={student} alt="student" className="student" />
        </div>
        <div className="lista">
          <div>
            <li className="profe-p"> <span> Selecciono mi tarea.</span></li>
            <li className="profe-p"> <span> Lleno el formulario.</span></li>
            <li className="profe-p"> <span> Envío mi solicitud.</span></li>
            <li className="profe-p"> <span> Evalúo las diferentes opciones</span></li>
            <li className="profe-p"> <span> Selecciono la que se ajusta a mi bolsillo.</span></li>
            <li className="profe-p"> <span> Entrego mi tarea y disfruto de mi tiempo libre.</span></li>
          </div>

        </div>
>>>>>>> cada678bbdf24e5ad7098ede0e9fa4bd66c47bf1

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
