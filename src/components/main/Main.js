/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Main.css";
import photo from "../../assets/illustrations/image1.jpeg";
import { ParallaxLayer } from "@react-spring/parallax";

const Main = (props) => {
  return (
    <ParallaxLayer offset={0} speed={0}>
      <div className="main-page">
        <div className="main-page__image">
          <img src={photo} alt="illustration" width="100%" height="100%" />
        </div>
        <div className="main-page__text">
          <h1>
            Hello! I'm <a>Charlene</a>
          </h1>
          <p>
            I'm UNSW computer science student and obsessed with designing things
            by code.
          </p>
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default Main;
