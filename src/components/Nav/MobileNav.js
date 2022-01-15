import React, { useState, useContext } from "react";
import MenuIcon from "../../assets/logo/MenuIcon";
import AllClick from "../store/AllClick";
import SideMenu from "./SideMenu";

const MobileNav = (props) => {
  const ctx = useContext(AllClick);
  const [open, setOpen] = useState(false);
  const classes = "mobile-nav " + props.className;

  const closeHandler = () => {
    setOpen(false);
  };

  return (
    <div className={classes}>
      <span>
        <MenuIcon onClick={() => setOpen(true)} />
        {open && <SideMenu onClose={closeHandler} click={ctx} />}
      </span>
    </div>
  );
};

export default MobileNav;
