import React from "react";
import SkillBar from "../UI/SkillBar";
import "./SkillItem.css";
import line from "../../assets/decor/Line2.png";

const SkillItem = (props) => {
  const data = props.skill;
  return (
    <>
      {!props.isOther && (
        <div>
          <h2 className="skill-item">
            {data.text}
            <img src={line} width="12%" className="skill-item__line" />
          </h2>
          {data.skills.map((skill) => (
            <SkillBar length={skill.num} name={skill.name} key={skill.name} />
          ))}
        </div>
      )}
      {props.isOther && (
        <div>
          <h2 className="skill-item">
            {data.text}
            <img src={line} width="10%" className="skill-item__line" />
          </h2>

          <p className="skill-item__other">{data.skills.join(" , ")}</p>
        </div>
      )}
    </>
  );
};

export default SkillItem;
