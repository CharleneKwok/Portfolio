import React, { useState } from "react";
import MenuIcon from "../../assets/logo/MenuIcon";
import SideMenu from "./SideMenu";

const MobileNav = (props) => {
  const [open, setOpen] = useState(false);
  const classes = "mobile-nav " + props.className;

  const closeHandler = () => {
    setOpen(false);
  };

  return (
    <div className={classes}>
      <span>
        <MenuIcon onClick={() => setOpen(true)} />
        {open && <SideMenu onClose={closeHandler} />}
      </span>
    </div>
  );
};

export default MobileNav;
