import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import "./Skills.css";
import BigTitle from "../UI/BigTitle";
import line from "../../assets/decor/Line3.png";
import ppl from "../../assets/decor/Confusion.png";
import fire from "../../assets/decor/Fire.png";
import smile from "../../assets/decor/smile.png";
import star from "../../assets/decor/Star.png";
import arrow from "../../assets/decor/Vector.png";
import SkillItem from "./SkillItem";

const data = [
  {
    text: "Frontend",
    skills: [
      {
        name: "JS/React",
        num: "70%",
      },
      {
        name: "CSS",
        num: "65%",
      },
    ],
  },
  {
    text: "Backend",
    skills: [
      {
        name: "Java",
        num: "50%",
      },
      {
        name: "Python",
        num: "60%",
      },
    ],
  },
  {
    text: "Other",
    skills: ["SQL", "Shell", "Perl", "Haskell", "Figma"],
  },
];

const Skills = (props) => {
  return (
    <div className="skills">
      <ParallaxLayer offset={2} speed={0.5} className="skills-layer" />
      {/* illustration */}
      <ParallaxLayer
        offset={2}
        speed={0.8}
        className="skills__illu skills__illu--ppl"
      >
        <img src={ppl} alt="confused people" />
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={0.8}
        className="skills__illu skills__illu--fire"
      >
        <img src={fire} alt="fire" />
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={0.8}
        className="skills__illu skills__illu--smile"
      >
        <img src={smile} alt="smile" />
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={0.8}
        className="skills__illu skills__illu--star"
      >
        <img src={star} alt="star" />
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={0.7}
        className="skills__illu skills__illu--arrow"
      >
        <img src={arrow} alt="arrow" />
      </ParallaxLayer>
      {/* title */}
      <ParallaxLayer offset={2} speed={0.7}>
        <div className="skills__title">
          <BigTitle text="Skills" className="skills_name" />
          <img src={line} alt="line" />
        </div>
      </ParallaxLayer>
      {/* skills */}
      <ParallaxLayer offset={2} speed={1}>
        <div className="skills__list">
          {data.map((skill) => (
            <SkillItem
              skill={skill}
              key={skill.text}
              isOther={skill.text === "Other" ? true : false}
            />
          ))}
        </div>
      </ParallaxLayer>
    </div>
  );
};

export default Skills;
