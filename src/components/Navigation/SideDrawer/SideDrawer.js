import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Aux from "../../../hoc/Aux1";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {
  let showClasses = [classes.SideDrawer, classes.Close];
  if(props.open) {
    showClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={showClasses.join(" ")}>
        <Logo  height='8%' />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
)};

export default SideDrawer;