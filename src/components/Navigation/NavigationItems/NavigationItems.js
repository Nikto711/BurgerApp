import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const NavigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem active="active" link="/">Burger Builder</NavigationItem>
    <NavigationItem link="/">CheckOut</NavigationItem>
  </ul>
);

export default NavigationItems;