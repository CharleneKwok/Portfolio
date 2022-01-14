import React from "react";
import "./Main.css";
import photo from "../../assets/illustrations/image1.jpeg";
import { ReactComponent as DownArrow } from "../../assets/down-arrow.svg";

const Main = (props) => {
  return (
    <div>
      <div className="main-page__background" />
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
      <div className="main-page__down-arrow">
        <DownArrow />
      </div>
    </div>
  );
};

export default Main;
