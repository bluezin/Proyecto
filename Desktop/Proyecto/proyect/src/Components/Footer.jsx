import React from "react";
import "../styles/Footer.css";
import logo from "../imagenes/logo.png"

const Footer = () => {
  return (
    <div>
      <div className="Footer">
        <p className="footer-p">email: contacto@tareasok.com</p>
        <p className="footer-tareas">Copyright <img src={logo} className="logo" alt="" /> TareasOk 2020</p> 
      </div>
    </div>
  );
};

export default Footer;
