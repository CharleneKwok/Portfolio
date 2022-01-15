import React from "react";
import "./BigTitle.css";

const BigTitle = (props) => {
  const classes = "big-title " + props.className;
  return <h1 className={classes}> {props.text}</h1>;
};

export default BigTitle;
