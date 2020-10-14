import React from 'react'
import "../styles/Home.css"
import logo from "../imagenes/logotipo2.png";
import { Link } from "react-router-dom";



export const Head = () => {
  return (
    <div className="Home">
        <Link to="/">
            <img src={logo} alt="logo" className="logo" />
        </Link>
      {/* <h1>Tareas K</h1> */}
    </div>
  )
}
