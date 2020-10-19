import React from "react";
import "../styles/Head.css";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import user from "../imagenes/icons-user.png";
import candado from "../imagenes/icon-candado.png";

const LoginForm = ({ handleLogin }) => {
  const [state, setState] = React.useState({
    checkedB: true,
  });

  const handleChangeChk = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className="LoginForm">
      <div className="card-loginForm">
        <p className="titleLogin">Iniciar Sesión</p>
        <div className="LoginContainer">
          <div className="LoginContainer-email">
            <img src={user} alt="mail" className="mail" />
            <TextField id="email" label="Correo" type="email" required />
          </div>
          <div className="LoginContainer-password">
            <img src={candado} alt="candado" className="candado" />
            <TextField id="pswd" label="Contraseña" required />
          </div>
          <div className="login-fogiveme">
            <div className="login-forgotcheck">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedB}
                    onChange={handleChangeChk}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Recuerdame"
              />
            </div>
            <div className="forgotLink">
              <Button className="Button_login" style={{ fontSize: 12 }}>
                olvidé mi contraseña
              </Button>
            </div>
          </div>
          <div className="Buttongo-div">
            <button className="Buttongo">Ingresar</button>
          </div>
          <div className="textRegister">
            <p>
              No tengo cuenta
              <Button onClick={handleLogin}>
                <b> Registrame</b>
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
