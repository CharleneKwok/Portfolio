import React from "react";
import Name from "../../assets/logo/Name";
import "./NavBar.css";
import Title from "../UI/Title";
import MobileNav from "./MobileNav";

const NavBar = () => {
  return (
    <div className="navbar">
      <span className="navbar__logo">
        <Name />
      </span>
      <div className="navbar__titles">
        <Title text="PROJECTS" />
        <Title text="SKILLS" />
        <Title text="CONTACT" />
      </div>
      <MobileNav className="navbar__mobile" />
    </div>
  );
};

export default NavBar;
