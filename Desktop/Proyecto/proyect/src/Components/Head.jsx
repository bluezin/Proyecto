import React from 'react'
import "../styles/Head.css"
import logotipo from "../imagenes/logotipo.png"

export const Head = () => {
  return (
    <div className="Head">
      <img src={logotipo} className="logotipo" alt="" />
    </div>
  )
}
