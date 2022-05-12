import expense from "../../assets/projects/expense.jpg";
import food from "../../assets/projects/food.jpg";
import wetravel from "../../assets/projects/Wetravel.jpg";
import gameHub from "../../assets/projects/gameHub.jpg";

export const projects = [
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
    name: "Game Hub",
    code: "https://github.com/CharleneKwok/game-hub",
    link: "https://game-hub-499.netlify.app/",
    description:
      '"A place to play mutiple funny small games. Finished building snake game. Typing Test and tetris are in progress~"',
    pic: gameHub,
    tech: "React, JavaScript, SASS/CSS",
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
