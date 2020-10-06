import React from "react";
import "./App.css";
import Head from "./Components/Head";
import Task from "./Components/Task";
import hombre from "./imagenes/Hombre.jpg";

function App() {
  return (
    <div className="App">
      <div className="hombre-div">
        <img src={hombre} className="hombre" />
      </div>
      <Head />
      <Task />
    </div>
  );
}

export default App;
