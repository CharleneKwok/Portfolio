import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Contact = (props) => {
  return (
    <ParallaxLayer
      offset={3}
      speed={0}
      style={{ backgroundColor: "#897da5" }}
    ></ParallaxLayer>
  );
};

export default Contact;
