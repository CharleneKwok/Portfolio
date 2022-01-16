import React from "react";
import "./SkillBar.css";

const SkillBar = (props) => {
  return (
    <div className="skill-bar">
      <h3 className="skill-bar__name">{props.name}</h3>
      <div className="skill-bar__bar">
        <div className="skill-bar__fill" style={{ width: `${props.length}` }} />
      </div>
      <h3 className="skill-bar__num">{props.length}</h3>
    </div>
  );
};

export default SkillBar;
