import React, { useContext } from "react";
import Name from "../../assets/logo/Name";
import "./NavBar.css";
import Title from "../UI/Title";
import MobileNav from "./MobileNav";
import AllClick from "../store/AllClick";

const NavBar = () => {
  const ctx = useContext(AllClick);
  return (
    <div className="navbar">
      <span className="navbar__logo">
        <Name onClick={ctx.name} />
      </span>
      <div className="navbar__titles">
        <Title text="PROJECTS" onClick={ctx.product} />
        <Title text="EXPERIENCES" onClick={ctx.skills} />
        <Title text="CONTACT" onClick={ctx.contact} />
      </div>
      <MobileNav className="navbar__mobile" />
    </div>
  );
};

export default NavBar;
