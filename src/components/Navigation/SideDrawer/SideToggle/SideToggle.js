import React from "react";
import classes from "./SideToggle.module.css";

const SideToggle = (props) => (
  <div className={classes.SideToggle} onClick={props.clicked}>
    <div></div>
  </div>
);

export default SideToggle;