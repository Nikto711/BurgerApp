import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import SideToggle from "../SideDrawer/SideToggle/SideToggle";
import classes from "./Toolbar.module.css";

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    {/* <div >Menu</div> */}
    <SideToggle clicked={props.clickedToggle} />
    <Logo height='80%' />
    <nav className={classes.DesctopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;