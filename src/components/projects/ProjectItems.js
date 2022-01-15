import React from "react";
import "./ProjectItems.css";
import expense from "../../assets/projects/expense.jpg";
import food from "../../assets/projects/food.jpg";
import travel from "../../assets/projects/travel.jpg";
import Card from "../UI/Card";

const images = [
  {
    name: "expense",
    from: expense,
    code: "https://github.com/CharleneKwok/Expense-Tracker",
    link: "https://expense-tracker499.netlify.app/",
  },
  {
    name: "food",
    from: food,
    code: "https://github.com/CharleneKwok/FoodOrder",
    link: "https://food-order499.netlify.app",
  },
  {
    name: "travel",
    from: travel,
    code: "https://github.com/CharleneKwok/Google-Maps-Travel-App",
    link: "https://travel-advisor499.netlify.app",
  },
];
const ProjectItems = (props) => {
  return (
    <div className="pics__container">
      <div className="pics__web">
        <span className="pics__web--dot" />
        <span className="pics__web--dot" />
        <span className="pics__web--dot" />
      </div>
      {images.map((image) => (
        <Card
          pic={image}
          key={image.name}
          className={`pics__${image.name} pics__pic`}
        />
      ))}
    </div>
  );
};

export default ProjectItems;
