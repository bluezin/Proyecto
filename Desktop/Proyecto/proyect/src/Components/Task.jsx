import React from "react";
import "../styles/Task.css";
import profesor from "../imagenes/profesor.png";
import student from "../imagenes/student.png";
import poligono from "../imagenes/poligono.png";
import trazado from "../imagenes/trazado.png";

const Task = () => {
  return (
    <div className="Task">
    <img src={trazado} alt="trazado" className="trazado" />
      <div>
        <div className="div-imagen">
          <img src={poligono} alt="poligono" className="poligono" />
          <img src={profesor} alt="" className="imagen-profesor" />
          <p className="profesor-parrafo">Profesor</p>
        </div>
        <p className="sabes">¿Sabes muchas materias?</p>
        <span>
          Ingresa aquí, selecciona tus conocimientos y obtén las recompensas
        </span>
        <br />
        <button className="Button">Ingresar</button>
      </div>

      <div>
        <div className="div-imagen"> 
          <img src={poligono} alt="poligono" className="poligono" />
          <img src={student} alt="student" className="student" />
          <p className="student-parrafo">Alumno</p>
        </div>

        <p className="sabes">¿Tareas que te quitan tiempo?</p>
        <span>
          Tranquilo, ingresa aquí y te daremos solución lo mas pronto posible
        </span>
        <br />
        <button className="Button">Ingresar</button>
      </div>
    </div>
  );
};

export default Task;
