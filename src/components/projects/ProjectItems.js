import React from "react";
import "./ProjectItems.css";
import expense from "../../assets/projects/expense.jpg";
import food from "../../assets/projects/food.jpg";
import wetravel from "../../assets/projects/Wetravel.jpg";
import Card from "../UI/Card";
import Title from "../UI/Title";

const projects = [
  {
    name: "WeTravel",
    code: "https://github.com/CharleneKwok/WeTravel",
    link: "https://wetravel499.netlify.app/",
    description:
      '" Here you can find the restaurants, hotels and attractions around you. Also you can see other user\'s posts to explore the world or post your life. "',
    pic: wetravel,
    tech: "React, NodeJS, SASS, MongoDB",
  },
  {
    name: "ReactFood",
    code: "https://github.com/CharleneKwok/FoodOrder",
    link: "https://food-order499.netlify.app",
    description: '" Food order website "',
    pic: food,
    tech: "React, CSS",
  },
  {
    name: "Expense",
    code: "https://github.com/CharleneKwok/Expense-Tracker",
    link: "https://expense-tracker499.netlify.app/",
    description: '" Record your daily respense "',
    pic: expense,
    tech: "React, CSS",
  },
];
const ProjectItems = (props) => {
  return (
    <div className="items__container">
      {projects.map((proj, i) => (
        <div key={i} className="item__container">
          <div
            style={{ backgroundImage: `url(${proj.pic})` }}
            className="item__image"
          />
          <div className="item__info">
            <a className="item_name">{proj.name}</a>
            <p>{proj.description}</p>
            <h3>Tech Stack: {proj.tech}</h3>
            <div>
              <Title text="Code" link={proj.code} />
              <Title text="Website" link={proj.link} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectItems;
