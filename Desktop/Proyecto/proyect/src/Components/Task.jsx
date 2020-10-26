import React from "react";
import FormularioTask from "./FormularioTask";
import {
  BsCheckCircle,
  BsFillXCircleFill,
  BsFillPlusCircleFill,
} from "react-icons/bs";
import "../styles/Task.css";
import TaskImagen from "../imagenes/task.png";
import { useState } from "react";
import Nav from "./Nav";

const Task = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <div className="Task-body">
      <Nav />
      <div className="div-color-Task">
        <h4 className="color-Task-h4">Envia tu tarea</h4>
      
      </div>
      {open === false ? (
        <p className="p-Task">
          <BsFillPlusCircleFill
            style={{
              color: "#16beff",
              fontSize: 20,
            }}
            className="BsFillXCircleFill"
            onClick={() => {
              setOpen(!open);
            }}
          />
          Crea una solicitud de tarea
        </p>
      ) : (
        <p className="p-Task">
          <BsFillXCircleFill
            style={{
              color: "#16beff",
              fontSize: 20,
            }}
            className="BsFillXCircleFill"
            onClick={() => {
              setOpen(!open);
            }}
          />
          Cancelar solicitud de tarea
        </p>
      )}
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
      {open ? <FormularioTask /> : null}
      {/* <Modal handleDelete={handleDelete} /> */}
    </div>
  );
};

export default Task;
