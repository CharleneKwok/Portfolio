import React from "react";
import ReactDOM from "react-dom";
import Title from "../UI/Title";
import "./SideMenu.css";

const Backdrop = (props) => {
  return <div className="side-menu__backdrop" onClick={props.onClick}></div>;
};

const ShowMenu = ({ ctx, onClose }) => {
  return (
    <div className="side-menu__show">
      <div className="side-menu__container">
        <Title
          text="PROJECTS"
          onClick={() => {
            ctx.product();
            onClose();
          }}
        />
        <Title
          text="SKILLS"
          onClick={() => {
            ctx.skills();
            onClose();
          }}
        />
        <Title
          text="CONTACT"
          onClick={() => {
            ctx.contact();
            onClose();
          }}
        />
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
        <ShowMenu ctx={props.click} onClose={props.onClose} />,
        document.getElementById("sideBar-root")
      )}
    </>
  );
};

export default SideMenu;
