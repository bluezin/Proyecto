import React from 'react'
<<<<<<< HEAD
import "../styles/Head.css"
import logotipo from "../imagenes/logotipo.png"

export const Head = () => {
  return (
    <div className="Head">
      <img src={logotipo} className="logotipo" alt="" />
=======
import "../styles/Home.css"
import logo from "../imagenes/logotipo.png";
import { Link } from "react-router-dom";



export const Head = () => {
  return (
    <div className="Home">
        <Link to="/">
            <img src={logo} alt="logo" className="logo" />
        </Link>
      {/* <h1>Tareas K</h1> */}
>>>>>>> 075809333e6b9f39db00ee7726c999b3fb9b080e
    </div>
  )
}
