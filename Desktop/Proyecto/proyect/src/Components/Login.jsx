import React, { useState } from "react";
import "../styles/Login.css";
import profe from "../imagenes/profesor.png";
import candado from "../imagenes/icon-candado.png";
// import mail from "../imagenes/icons-mail.png";
import user from "../imagenes/icons-user.png";
import children from "../imagenes/children.png";
import estudiante from "../imagenes/estudiante.png";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

// import Typography from "@material-ui/core/Typography";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

const Login = () => {
  const [booleano, setBooleano] = useState(true);
  const handleProfesor = () => {
    setBooleano(true);

    console.log(booleano);
  };
  
  const arrayTeacher = [
    " ¿ Qué puedo hacer como Genio?",
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
      <div className="fondoLogin-mobile">
        <div className="card-leftdivider">
          <div className="card-leftdividerFirst">
            <div className="card-sectionButtonClass">
                <button className="ButtonClass" type="button" onClick={handleProfesor}>Genio</button>
                <button className="ButtonClass" type="button" onClick={handleEstudiante}>Estudiante</button>
            </div>
            
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
              <img src={profe} alt="logos" className="logos" />
            ) : (
              <img src={estudiante} alt="logos" className="logos" />
            )}
          </div>
        </div>

        <div className="card-rightdivider">
          
          <div className="card-loginForm">
            <div>
              <p className="titleLogin">Iniciar Sesión</p>
            </div>
            <div className="LoginContainer">
              <div className="LoginContainer-email">
                <img src={user} alt="mail" className="mail" />
                <TextField id="email" label="Correo" type="email" required />
              </div>
              <div className="LoginContainer-password">
                <img src={candado} alt="candado" className="candado" />
                <TextField
                  id="pswd"
                  label="Contraseña"
                  type="password"
                  required
                />
              </div>
              <div className="login-fogiveme">
                <div  className="login-forgotcheck">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.checkedB}
                        onChange={handleChangeChk}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label        = "Recuerdame"
                  />

                </div>
                <div className="forgotLink">
                <Button className="ButtonForgot">
                  olvidé mi contraseña
                </Button>

                </div>
              </div>
              <div>
                <button className="Buttongo">Ingresar</button>
              </div>
              <div className="textRegister">
                  <p>
                    No tengo cuenta
                    <Link to="/Register">
                      <Button  ><b> Registrame</b></Button>
                    </Link>
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
