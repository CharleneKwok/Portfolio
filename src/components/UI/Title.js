import React from "react";
import "./Title.css";

const Title = (props) => {
  const classes = "title " + props.className;
  return (
    <h2 className={classes} onClick={props.onClick}>
      <a href="#">{props.text}</a>
    </h2>
  );
};

export default Title;
