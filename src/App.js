import React, { useRef } from "react";
import NavBar from "./components/Nav/NavBar";
import Main from "./components/main/Main";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import "./components/Nav/NavBar.css";
import AllClick from "./components/store/AllClick";

function App() {
  const ref = useRef();

  const clickProduct = () => {
    return ref.current.scrollTo(1);
  };

  const clickSkills = () => {
    return ref.current.scrollTo(2);
  };

  const clickName = () => {
    return ref.current.scrollTo(0);
  };

  const clickContact = () => {
    return ref.current.scrollTo(3);
  };

  return (
    <AllClick.Provider
      value={{
        product: clickProduct,
        name: clickName,
        contact: clickContact,
        skills: clickSkills,
      }}
    >
      <Parallax pages={3} ref={ref}>
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
      </Parallax>
    </AllClick.Provider>
  );
}

export default App;
