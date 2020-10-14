import React from "react";
import "../styles/Head.css";
// import { Link } from "react-router-dom";

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from "@material-ui/core/TextField";


const LoginForm = () => {
    const [state, setState] = React.useState({
        checkedB: true,
    });

    const handleChangeChk = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
  return (
    <div>
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
                    No tengo cuenta,<b> Registrame</b>
                </p>
            </div>
        </div>
    </div>
  );
};

export default LoginForm;
