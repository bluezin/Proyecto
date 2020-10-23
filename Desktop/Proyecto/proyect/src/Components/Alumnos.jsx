import React from "react";
import "../styles/Alumnos.css";
import student from "../imagenes/estudiante.png";

import { Link } from "react-router-dom";

const Alumno = () => {
  return (
    <div className="Alumno">
      <div>
        <div className="div-student">
          <h1 className="informacion-como">¿Cómo solucionar mis tareas en 6 pasos?</h1>
        </div>
        <div className="Alumno-Imag">
          <img src={student} alt="student" className="student" />
        </div>
        <div className="infoGroup">
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

          <div className="Button-div">
            <Link to="/login">
              <button className="Button-Alumno">INGRESAR</button>
            </Link>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Alumno;
