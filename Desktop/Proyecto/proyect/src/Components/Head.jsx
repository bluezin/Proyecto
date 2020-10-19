import React from "react";
import "../styles/Head.css";
import logotipo from "../imagenes/logotipo2.png";
import "../styles/Home.css";
import { Link } from "react-router-dom";

export const Head = () => {
  return (
    <div className="Head">
      <Link to="/">
        <img src={logotipo} className="logotipo" alt="logotipo" />
      </Link>
    </div>
  );
};


