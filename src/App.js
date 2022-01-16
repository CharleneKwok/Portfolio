import React, { useRef } from "react";
import NavBar from "./components/Nav/NavBar";
import Main from "./components/main/Main";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import "./components/Nav/NavBar.css";
import AllClick from "./components/store/AllClick";
import Contact from "./components/contact/Contact";

function App() {
  const ref = useRef();

  return (
    <AllClick.Provider
      value={{
        product: () => ref.current.scrollTo(1),
        name: () => ref.current.scrollTo(0),
        contact: () => ref.current.scrollTo(2.7),
        skills: () => ref.current.scrollTo(2),
      }}
    >
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={0}
          sticky={{ start: 0, end: 3 }}
          style={{ height: "90px" }}
        >
          <NavBar />
        </ParallaxLayer>
        <Main />
        <Projects />
        <Skills />
        <Contact />
      </Parallax>
    </AllClick.Provider>
  );
}

export default App;
