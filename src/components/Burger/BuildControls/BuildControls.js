import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
  { label: "Salat", type: "salad" },
  { label: "Kolbasa", type: "sausage" },
  { label: "Pishloq", type: "cheese" },
  { label: "Go'sht", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>Maxsulot Narxi: <strong>${props.price.toFixed(2)}</strong></p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label + 1}
          label={ctrl.label}
          added={() => props.ingradientsAdded(ctrl.type)}
          removed={() => props.ingradientsRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button 
        className={classes.OrderButton} 
        disabled={!props.purchasable}
        onClick={props.ordered}>Buyurtma Berish</button>
    </div>
  );
};

export default BuildControls;
