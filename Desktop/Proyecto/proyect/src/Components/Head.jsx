import React from "react";
import "../styles/Head.css";
import logotipo from "../imagenes/logotipo.png";
import "../styles/Home.css";
import logo from "../imagenes/logotipo.png";
import { Link } from "react-router-dom";

export const Head = () => {
  return (
    <div className="Head">
      <img src={logotipo} className="logotipo" alt="" />
    </div>
  );
};

{
  /* export const Head = () => {
  return (
    <div className="Home">
        <Link to="/">
            <img src={logo} alt="logo" className="logo" />
        </Link>
    </div>
  )
} */
}
