import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="Home">
        <div className="homeText-principal">
          <p className="h1">Tu tranquilo,</p>
          <p>Si eres estudiante, te ayudamos a resolver tus tareas</p>

        </div>
        <div className="inButton">
          <Link to="/login">
            <button className="Button-Home">INGRESAR</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
