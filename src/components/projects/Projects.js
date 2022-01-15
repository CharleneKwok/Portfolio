import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import "./Projects.css";
import Funiture from "../../assets/decor/Furniture2.png";
import wfh from "../../assets/decor/wfh.png";
import BigTitle from "../UI/BigTitle";
import ProjectItems from "./ProjectItems";

const Projects = (props) => {
  return (
    <div className="proj">
      <ParallaxLayer
        offset={1}
        speed={0}
        className="proj__lamp"
        factor={(0.2, 0.2)}
      >
        <img src={Funiture} alt="lamp and chair" />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.2} className="proj__titles">
        <BigTitle text="Projects" />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0} className="proj__pics">
        <ProjectItems />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={-0.4} className="proj__wfh">
        <img src={wfh} alt="wfh" />
      </ParallaxLayer>
    </div>
  );
};

export default Projects;
