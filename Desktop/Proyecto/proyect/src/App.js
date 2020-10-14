import React from "react";
import "./App.css";
import Home from "./Components/Home";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Task from "../src/Components/Task";
import Profesor from "../src/Components/Profesor";

function App() {
  const properties = {
    duration: 5000,
    transitionDuration: 800,
    arrows: true
  }
  
  return (
    <div className="App">
      <Slide {...properties} easing="ease" className="SOLID">
        <div className="each-slide" >
          <Home />
        </div>
        <div className="each-slide">
          <Task />
        </div>
        <div className="each-slide">
          <Profesor />
        </div>
      </Slide>
          {/* <Home /> */}

    </div>
  );
}

export default App;
