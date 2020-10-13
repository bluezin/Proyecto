import React from "react";
import "../styles/Head.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="Head">
        <h1 className="h1">Tu tranquilo,</h1>
        <h1>Si eres estudiante, te ayudamos a resolver tus tareas</h1>
        <div className="">
          <Link to="/alumno">
            <button className="Button">INGRESAR</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
