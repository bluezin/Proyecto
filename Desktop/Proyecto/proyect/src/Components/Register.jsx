import React from "react";
import "../styles/Register.css";

import Button from "@material-ui/core/Button";
import user from "../imagenes/icons-user.png";
import candado from "../imagenes/icon-candado.png";
import mail from "../imagenes/icons-mail.png";

// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div className="Register">
      <div className="card-loginForm">
        <div>
                <p className="titleRegister">Iniciar Sesión</p>
        </div>
        <div className="registerContainer">
          <div className="registerContainer-user">
            <img src={user} alt="user" className="user" />
            <TextField id="username" label="Nombre de usuario" type="user" required />
          </div>
          <div className="registerContainer-email">
            <img src={mail} alt="mail" className="mail" />
            <TextField id="email" label="Correo" type="email" required />
          </div>
         
          <div className="registerContainer-password">
            <img src={candado} alt="candado" className="candado" />
            <TextField
              id="pswd"
              label="Contraseña"
              type="password"
              required
            />
          </div>
          <div className="registerContainer-password">
            <img src={candado} alt="candado" className="candado" />
            <TextField
              id="pswd"
              label="Confirmar Contraseña"
              type="password"
              required
            />
          </div>
          <div>
            <button className="Buttongo">Registrarme</button>
          </div>
          <div className="textRegister">
              <p>
                Ya tengo cuenta
                <Link to="/Login">
                  <Button  ><b> Ingresar</b></Button>
                </Link>
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
