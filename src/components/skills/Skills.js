import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./Skills.css";

const Skills = (props) => {
  return (
    <div>
      <ParallaxLayer offset={2} speed={0.5} className="skills"></ParallaxLayer>
    </div>
  );
};

export default Skills;
