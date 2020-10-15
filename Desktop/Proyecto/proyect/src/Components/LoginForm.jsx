import React from "react";
import "../styles/Head.css";
// import { Link } from "react-router-dom";

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import user from "../imagenes/icons-user.png";
import candado from "../imagenes/icon-candado.png";





const LoginForm = () => {
    const [state, setState] = React.useState({
        checkedB: true,
    });

    const handleChangeChk = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
  return (
    <div className="LoginForm">
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
  );
};

export default LoginForm;
