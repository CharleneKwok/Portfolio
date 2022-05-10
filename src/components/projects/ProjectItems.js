import React from "react";
import "./ProjectItems.css";
import expense from "../../assets/projects/expense.jpg";
import food from "../../assets/projects/food.jpg";
import wetravel from "../../assets/projects/Wetravel.jpg";
import Card from "../UI/Card";

const projects = [
  {
    name: "WeTravel",
    code: "https://github.com/CharleneKwok/WeTravel",
    link: "https://wetravel499.netlify.app/",
    description: "balabala",
    pic: wetravel,
  },
  {
    name: "Food",
    code: "https://github.com/CharleneKwok/FoodOrder",
    link: "https://food-order499.netlify.app",
    description: "food",
    pic: food,
  },
  {
    name: "expense",
    code: "https://github.com/CharleneKwok/Expense-Tracker",
    link: "https://expense-tracker499.netlify.app/",
    description: "expense balabala",
    pic: expense,
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
          <p>{proj.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectItems;
