import React from "react";
import "../styles/Task.css";
<<<<<<< HEAD
import student from "../imagenes/estudiante.png";
// import poligono from "../imagenes/poligono.png";
=======

import student from "../imagenes/student.png";
import poligono from "../imagenes/poligono.png";
>>>>>>> 075809333e6b9f39db00ee7726c999b3fb9b080e
import { Link } from "react-router-dom";

const Task = () => {
  return (
    <div className="Task">
      <div>
        <h1 className="informacion como">Como solucionar mis tareas en 6 pasos</h1>
        <div className="lista">
          <li className="profe-p">Selecciono mi tarea</li>
          <li className="profe-p">Lleno el formulario</li>
          <li className="profe-p">Envio mi solicitud</li>
          <li className="profe-p">Evaluo las diferentes opciones</li>
          <li className="profe-p">Selecciono lo que se ajusta a mi bolsillo y a mi nivel educativo</li>
          <li className="profe-p">Entrego mi tarea y disfruto de mi tiempo libre</li>
        </div>
        <div className="div-student">
          {/* <img src={poligono} alt="poligono" className="poligono" /> */}
          {/* <p className="student-parrafo">Alumno</p> */}
          <img src={student} alt="student" className="student" />
        </div>

        <div className="Button-div">
          <Link to="/login">
            <button className="Button-Task">INGRESAR</button>
          </Link>
        </div>
      
      </div>
    </div>
  );
};

export default Task;
