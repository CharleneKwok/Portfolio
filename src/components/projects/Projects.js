import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import "./Projects.css";
import Funiture from "../../assets/decor/Furniture2.png";
import call from "../../assets/decor/Call.png";
import video from "../../assets/decor/Video.png";
import wfh from "../../assets/decor/wfh.png";
import line from "../../assets/decor/Line.png";
// super small
import circle from "../../assets/small/circle.png";
import line2 from "../../assets/small/line2.png";
import tri from "../../assets/small/tri.png";
import ret from "../../assets/small/ret.png";

import BigTitle from "../UI/BigTitle";
import ProjectItems from "./ProjectItems";

const Projects = (props) => {
  return (
    <div className="proj">
      {/* lamp */}
      <ParallaxLayer
        offset={1}
        speed={0.2}
        className="proj__lamp"
        factor={(0.2, 0.2)}
      >
        <img src={Funiture} alt="lamp" />
      </ParallaxLayer>
      {/* title */}
      <ParallaxLayer offset={1} speed={0.2} className="proj__titles">
        <BigTitle text="Projects" />
        <img src={line} alt="line" />
      </ParallaxLayer>
      {/* show projects */}
      <ParallaxLayer offset={1} speed={0} className="proj__pics">
        <ProjectItems />
      </ParallaxLayer>
      {/* small illustraions */}
      <ParallaxLayer offset={1} speed={-0.1} className="proj__call proj__illu">
        <img src={call} alt="call" width="14%" />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={-0.2} className="proj__video proj__illu">
        <img src={video} alt="video call" width="15%" />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={-0.4} className="proj__wfh proj__illu">
        <img src={wfh} alt="wfh" />
      </ParallaxLayer>
      {/* super small */}
      <ParallaxLayer offset={1} speed={0} className="proj__illu proj__cicle">
        <img src={circle} alt="circle" />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.1} className="proj__line2 proj__illu">
        <img src={line2} alt="line2" />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={-0.1} className="proj__tri proj__illu">
        <img src={tri} alt="triangle" />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.3} className="proj__tri2 proj__illu">
        <img src={tri} alt="triangle2" />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.1} className="proj__line3 proj__illu">
        <img src={line2} alt="line3" />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.1} className="proj__ret proj__illu">
        <img src={ret} alt="retangle" />
      </ParallaxLayer>
    </div>
  );
};

export default Projects;
