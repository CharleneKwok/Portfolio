import React from "react";
import "./Name.css";

const Name = (props) => {
  return (
    <svg
      viewBox="0 0 210 58"
      width="210px"
      height="58px"
      className="logo"
      onClick={props.onClick}
    >
      <text x="50%" y="90%" textAnchor="middle">
        Charlene
      </text>
    </svg>
  );
};

export default Name;
