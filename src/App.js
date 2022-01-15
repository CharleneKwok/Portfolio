// import "./App.css";
import React from "react";
import NavBar from "./components/Nav/NavBar";
import Main from "./components/main/Main";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <NavBar />
      <Parallax pages={3}>
        <Main />
        <Projects />
        <Skills />
      </Parallax>
    </>
  );
}

export default App;
