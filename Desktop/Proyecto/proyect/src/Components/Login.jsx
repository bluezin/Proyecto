import React, { useState } from "react";
import "../styles/Login.css";
import logo from "../imagenes/logotipo.png";
import children from "../imagenes/children.png";
import estudiante from "../imagenes/estudiante.png";
// import children from "../imagenes/fondo-login.svg";
// import Button from "./Button";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};



const SimpleList = ({ list }) => (
  <ol>
    {list.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ol>
);
const Login = () => {
  // const classes = useStyles();
  // const bandera = true;
  const [valor, setValor] = useState();
  const arrayTeacherDescription = [
    " 1. Selecciono las asignaturas.",
    " 2. Veo las tareas.",
    " 3. Las organizo a mi preferencia.",
    " 4. Selecciono al estudiante que quiero ayudar.",
    " 5. Ofrezco mi tarifa.",
    " 6. Recibo el pago por mis servicios.",
  ];
  const arrayStudentDescription =[
    " 1. Selecciono mi tarea.",
    " 2. la selecciono y lleno el formulario.", 
    " 3. Busco la persona que quiero que me ayude.",
    " 4. Evaluo las diferentes opciones.",
    " 5. Selecciono la que se ajuste a mi bolsillo y a mi nivel educativo.",
    " 6. Entrego mi tarea y disfruto de mi tiempo libre.",
  ];
  const handleChange = (event) => {
    setValor(event.target.value)
    console.log(`valor: ${valor}` )
  };
  // function handleClick( event ) {
  //   const bandera = false;
  //   console.log(bandera)

  // }
  // function handleClicker( event ) {
  //   const bandera = true;
  //   console.log(bandera)

  // }
  const [value, setValue] = React.useState(0);

  const handleChangeST = (event, newValue) => {
    setValue(newValue);
  };
  
  

  return (
    <div className="Login">
      <form>
        <div className="card-leftdivider">
          <div className="card-leftdividerFirst">
            <div className="bolcklogo">
                <p>   <img src={logo} alt="logo" className="logo" /> </p>
            </div>
            <div>
                {/* <div>
                  <button className="Button" type="button" onClick={handleClick}>Estudiante</button>
                  <button className="Button" type="button" onClick={handleClicker}>Estudiante</button>
                </div>
                <div>
                  {bandera ? 
                    <SimpleList className="descrption-text" list={arrayTeacherDescription} />:
                    <SimpleList className="descrption-text" list={arrayStudentDescription} />
                  }

                </div> */}
              
              <AppBar position="static">
                <Tabs value={value} onChange={handleChangeST} aria-label="simple tabs example">
                  <Tab label="Profesor" {...a11yProps(0)} />
                  <Tab label="Estudiante" {...a11yProps(1)} />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                <Typography  className="descrption-question">
                  ¿Qué puedo hacer en la sección de docentes?
                </Typography>
                <SimpleList className="descrption-text" list={arrayTeacherDescription} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                  <Typography  className="descrption-question">
                    ¿Qué puedo hacer en la sección de Estudiantes? 
                  </Typography>
                  <SimpleList className="descrption-text" list={arrayStudentDescription} />
              </TabPanel>
            </div>
            <div className="urlPag">
                <img src={children} alt="logo" className="logo" /> 
            </div>
          </div>
          <div className="card-leftdividerSecond">
              <img src={estudiante} alt="logo" className="logo" /> 
          </div>
        </div>
        <div  className="card-rightdivider">
          <div>
            <p className="titleLogin">Iniciar sesión</p>
          </div>
          <div className="LoginContainer" >
            <div className="LoginContainer-email">
              <TextField id="email" label="Correo" type="email"  required onChange={handleChange}  />
            </div>
            <div className="LoginContainer-password">
              <TextField id="pswd" label="Contraseña" type="password"  required onChange={handleChange}  />
                <div>
                  <p className="forgotLink" >olvidé mi contraseña</p>
                </div>
            </div>
            <div>
              <button className="Button">Ingresar</button>
            </div>
            <div className="textRegister">
              <p> No tengo cuenta,<b> Registrame</b></p>
            </div>
          </div>
          
          {     /*     
            <p>Email:</p>
            <input required onChange={handleChange} />
            <p>Password:</p>
            <input type="password" required onChange={handleChange} /> */
          }
      
        </div>
       
      </form>
      
    </div>
  );
};

export default Login;
