import React from "react";
import "./Title.css";

const Title = (props) => {
  const classes = "title " + props.className;
  return (
    <h3 className={classes} onClick={props.onClick}>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.text}
      </a>
    </h3>
  );
};

export default Title;
