import expense from "../../assets/projects/expense.jpg";
import food from "../../assets/projects/food.jpg";
import wetravel from "../../assets/projects/Wetravel.jpg";
import gameHub from "../../assets/projects/gameHub.jpg";
import resume from "../../assets/projects/resume.jpg";

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
    name: "Resume Generator",
    code: "https://github.com/CharleneKwok/resume-creator",
    link: "https://resume-creator499.netlify.app/",
    description:
      '" No idea how to write the resume? Here I provide the guide and some examples to help you generating your own resume!"',
    pic: resume,
    tech: "React, MUI, SASS",
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
    name: "Game Hub",
    code: "https://github.com/CharleneKwok/game-hub",
    link: "https://game-hub-499.netlify.app/",
    description:
      '"A place to play mutiple funny small games. Finished building snake game. Typing Test and Tetris are in progress~"',
    pic: gameHub,
    tech: "React, JavaScript, SASS/CSS",
  },
  {
    name: "Expense",
    code: "https://github.com/CharleneKwok/Expense-Tracker",
    link: "https://expense-tracker499.netlify.app/",
    description: '" Record your daily expense "',
    pic: expense,
    tech: "React, CSS",
  },
];
