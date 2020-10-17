import React, { useState } from "react";
import "../styles/Login.css";
import profe from "../imagenes/profesor.png";
import children from "../imagenes/children.png";
import estudiante from "../imagenes/estudiante.png";
import LoginForm from "./LoginForm";
import Register from "./Register";

// import mail from "../imagenes/icons-mail.png";
// import Typography from "@material-ui/core/Typography";

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

  const [boo, setBoo] = useState(true);

  const handleRegister = () => {
    setBoo(true);
    console.log(boo)
  };
  const handleLogin = () => {
    setBoo(false);
    console.log(boo)

  };

  return (
    <div className="Login">
      <div className="fondoLogin-mobile">
        <div className="card-leftdivider">
          <div className="card-leftdividerFirst">
            <div className="card-sectionButtonClass">
              <button
                className="ButtonClass"
                type="button"
                onClick={handleProfesor}
              >
                Genio
              </button>
              <button
                className="ButtonClass"
                type="button"
                onClick={handleEstudiante}
              >
                Estudiante
              </button>
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
              <img src={profe} alt="logos" className="logos-profe" />
            ) : (
              <img src={estudiante} alt="logos" className="logos-profe" />
            )}
          </div>
        </div>

        <div className="card-rightdivider">
          {boo ? (
            <LoginForm handleLogin={handleLogin} />
          ) : (
            <Register handleRegister={handleRegister} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;