import React from 'react';
import classes from './BuildControl.module.css'

const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
        <div className={classes.Label}><b>{props.label}</b></div>
        <button  className={classes.Less} disabled={props.disabled} onClick={props.removed}>Olish</button>
        <button className={classes.More} onClick={props.added}>Qo'shish</button>
    </div>
  )
}
export default BuildControl;