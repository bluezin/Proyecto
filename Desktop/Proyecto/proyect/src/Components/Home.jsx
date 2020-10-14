import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="Home">
        <h1 className="h1">Tu tranquilo,</h1>
        <h1>Si eres estudiante, te ayudamos a resolver tus tareas</h1>
        <div className="">
          <Link to="/login">
            <button className="Button-Home">INGRESAR</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
