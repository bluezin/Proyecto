import React from "react";
import "../styles/Task.css";
import student from "../imagenes/student.png";
import poligono from "../imagenes/poligono.png";
import { Link } from "react-router-dom";

const Task = () => {
  return (
    <div className="Task">
      <div>
        <h1 className="informacion">Como solucionar mis tareas en 6 pasos</h1>
        <div className="lista">
          <p>Selecciono mi tarea</p>
          <p>Lleno el formulario</p>
          <p>Envio mi solicitud</p>
          <p>Evaluo las diferentes opciones</p>
          <p>
            Selecciono lo que se ajusta a mi bolsillo y a mi nivel educativo
          </p>
          <p>Entrego mi tarea y disfruto de mi tiempo libre</p>
        </div>

        <div className="div-imagen">
          <img src={poligono} alt="poligono" className="poligono" />
          <img src={student} alt="student" className="student" />
          <p className="student-parrafo">Alumno</p>
        </div>
        <div className="Button-div">
          <Link to="/profesor">
            <button className="Button-Task">INGRESAR</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Task;
