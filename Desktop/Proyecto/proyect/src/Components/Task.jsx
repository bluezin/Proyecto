import React from "react";
import "../styles/Task.css";
import profesor from "../imagenes/profesor.png";
import student from "../imagenes/student.png";
import poligono from "../imagenes/poligono.png";

const Task = () => {
  return (
    <div className="Task">
      <div>
        <div className="div-imagen">
          <img src={poligono} alt="poligono" className="poligono" />
          <img src={profesor} alt="" className="imagen-profesor" />
          <p className="profesor-parrafo">Profesor</p>
        </div>
        <p className="sabes">Sabes muchas materia?</p>
        <span>
          Ingresa aqui selecciona lo que sabes y recibe lo que te mereces
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

        <p className="sabes">Tareas que te quitan tiempo?</p>
        <span>
          Tranquilo ingresa aqui y le daremos solucion los mas pronto posible
        </span>
        <br />
        <button className="Button">Ingresar</button>
      </div>
    </div>
  );
};

export default Task;
