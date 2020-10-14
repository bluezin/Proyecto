import React, { useState } from "react";
import "../styles/Login.css";
import profe from "../imagenes/profesor.png";
import children from "../imagenes/children.png";
import estudiante from "../imagenes/estudiante.png";
import { Link } from "react-router-dom";


// import Typography from "@material-ui/core/Typography";

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from "@material-ui/core/TextField";


const Login = () => {
  const [booleano, setBooleano] = useState(true);
  const handleProfesor = () => {
    setBooleano(true);

    console.log(booleano);
  };
  const [formActivator, setFormActivator] = useState(true);
  const handleForm = () => {
    setBooleano(true);

    console.log(booleano);
  };
  const arrayTeacher = [
    " ¿ Qué puedo hacer como Profesor?",
    " 1. Selecciono las asignaturas.",
    " 2. Veo las tareas.",
    " 3. Las organizo a mi preferencia.",
    " 4. Selecciono al estudiante que quiero ayudar.",
    " 5. Ofrezco mi tarifa.",
    " 6. Recibo el pago por mis servicios.",
  ];

  const handleEstudiante = () => {
    setBooleano(false);
    console.log(booleano);
  };
  const arrayEstudent = [
    " ¿ Qué puedo hacer como Estudiante?",
    " 1. Selecciono mi tarea.",
    " 2. la selecciono y lleno el formulario.",
    " 3. Busco la persona que quiero que me ayude.",
    " 4. Evaluo las diferentes opciones.",
    " 5. Selecciono la que se ajuste a mi bolsillo y a mi nivel educativo.",
    " 6. Entrego mi tarea y disfruto de mi tiempo libre.",
  ];
  const [state, setState] = React.useState({
    checkedB: true,
  });

  const handleChangeChk = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div className="Login">
      <form>
        <div className="card-leftdivider">
          <div className="card-leftdividerFirst">
            <div className="card-sectionButtonClass">
                <button className="ButtonClass" type="button" onClick={handleProfesor}>Profesor</button>
                <button className="ButtonClass" type="button" onClick={handleEstudiante}>Estudiante</button>
            </div>
            {/* <div className="bolcklogo">
              <p>
                <img src={logo} alt="logo" className="logo" />
              </p>
            </div> */}
            <div>
              <div className="card-sectionTextClass">
                {booleano
                  ? arrayTeacher.map((item, index) => {
                      return <p key={index}>{item}</p>;
                    })
                  : arrayEstudent.map((item, index) => {
                      return <p key={index}>{item}</p>;
                    })}
              </div>
            </div>

            <div className="urlPag">
              <img src={children} alt="logo" className="imagen" />
            </div>
          </div>

          <div className="card-leftdividerSecond">
            {booleano ? (
              <img src={profe} alt="logo" className="logo" />
            ) : (
              <img src={estudiante} alt="logo" className="logo" />
            )}
          </div>
        </div>

        <div className="card-rightdivider">
          <div className="card-loginForm">
            <div>
              <p className="titleLogin">Iniciar sesión</p>
            </div>
            <div className="LoginContainer">
              <div className="LoginContainer-email">
                <TextField id="email" label="Correo" type="email" required />
              </div>
              <div className="LoginContainer-password">
                <TextField
                  id="pswd"
                  label="Contraseña"
                  type="password"
                  required
                />
                <div className="login-fogiveme">
                  <FormControlLabel
                      control      = {
                        <Checkbox
                          checked  = {state.checkedB}
                          onChange = {handleChangeChk}
                          name     = "checkedB"
                          color    = "primary"
                        />
                      }
                      label        = "Recuerdame"
                  />
                  <p className="forgotLink">olvidé mi contraseña</p>
                </div>
              </div>
              <div>
                <button className="Button">Ingresar</button>
              </div>
              <div className="textRegister">
                <p>
                  No tengo cuenta,
                  
                  <b type="button" onClick={handleProfesor}> Registrame</b>
                </p>
              </div>
            </div>

          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;


