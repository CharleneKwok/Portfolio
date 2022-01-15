import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Skills = (props) => {
  return (
    <ParallaxLayer
      offset={2}
      speed={1}
      style={{ backgroundColor: "#897da5" }}
    ></ParallaxLayer>
  );
};

export default Skills;
