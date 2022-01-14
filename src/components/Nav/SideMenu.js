import React from "react";
import ReactDOM from "react-dom";
import Title from "../UI/Title";

import "./SideMenu.css";

const Backdrop = (props) => {
  return <div className="side-menu__backdrop" onClick={props.onClick}></div>;
};

const ShowMenu = () => {
  return (
    <div className="side-menu__show">
      <div className="side-menu__container">
        <Title text="PROJECTS" />
        <Title text="SKILLS" />
        <Title text="CONTACT" />
      </div>
    </div>
  );
};

const SideMenu = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <ShowMenu />,
        document.getElementById("sideBar-root")
      )}
    </>
  );
};

export default SideMenu;
