import React from "react";
import "./Main.css";
import photo from "../../assets/illustrations/image1.jpeg";

const Main = (props) => {
  return (
    <div className="main-page">
      <div>
        <div className="main-page__image--container">
          <img src={photo} alt="illustration" width="100%" height="100%" />
          {/* <div className="main-page__image"></div> */}
        </div>
      </div>
      <div className="main-page__text">
        <h1>Hi I'm Charlene</h1>
        <p></p>
      </div>
    </div>
  );
};

export default Main;
