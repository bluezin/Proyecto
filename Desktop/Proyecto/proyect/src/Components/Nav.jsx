import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiFilter } from "react-icons/fi";
import "../styles/Nav.css";
import Filtrear from "./Filtrear";

const Nav = () => {
  const [filtrear, setFiltrear] = useState(false);

  const handleClose = () => {
    setFiltrear(false);
  };

  const handleOpen = () => {
    setFiltrear(true);
  };

  console.log(filtrear);

  return (
    <div>
      <div className="div-strong">
        <Link to="/Task">
          <strong className="strong_Nav">Solicitud</strong>
        </Link>
        <Link to="/ofertas">
          <strong className="strong_Nav">Ofertas</strong>
        </Link>
        <Link to="/misTareas">
          <strong className="strong_Nav">Mis Tareas</strong>
        </Link>
      </div>
      {filtrear ? (
        <Filtrear handleClose={handleClose} />
      ) : (
        <h4 className="color-Nav-h5" onClick={handleOpen}>
          Filtrear
          <FiFilter style={{ fontSize: 20 }} className="FIFilter" />
        </h4>
      )}
    </div>
  );
};

export default Nav;
