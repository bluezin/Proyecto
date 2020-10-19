import React from "react";
import "../styles/Register.css";

<<<<<<< HEAD
const Register = ({ handleRegister }) => {
  return (
    <div>
      <div className="Register">Holaaaaaa</div>
      <button onClick={handleRegister}>Inicia secion</button>
=======
import Button from "@material-ui/core/Button";
import user from "../imagenes/icons-user.png";
import candado from "../imagenes/icon-candado.png";
import mail from "../imagenes/icons-mail.png";

import TextField from "@material-ui/core/TextField";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';



const Register = ({ handleRegister }) => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
            <TextField id="newEmail" label="Correo" type="email" required />
          </div>
         
          <div className="registerContainer-password">
            <img src={candado} alt="candado" className="candado" />
            <TextField
              id="newpswd"
              label="Contraseña"
              type="password"
              required
            />
          </div>
          <div className="registerContainer-password-sec">
            <img src={candado} alt="candado" className="candado" />
            <TextField
              id="newPswdConfirm"
              label="Confirmar Contraseña"
              type="password"
              required
            />
          </div>
          <div className="radioButtonSelection">
            <FormControl className="selection">
              <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value={1}>Estudiante</MenuItem>
                <MenuItem value={2}>Genio</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <button className="Buttongo">Registrarme</button>
          </div>
          <div className="textRegister">
              <p>
                Ya tengo cuenta
                  <Button onClick={handleRegister} ><b> Ingresar</b></Button>
                
              </p>
          </div>
        </div>
      </div>
>>>>>>> cada678bbdf24e5ad7098ede0e9fa4bd66c47bf1
    </div>
  );
};

export default Register;
