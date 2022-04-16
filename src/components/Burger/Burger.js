import React from 'react';
import Burgeringradient from "./Burgeringradient/Burgeringradient";
import clasess from "./burger.module.css"

const Burger = (props) => {
  let transformIngradient = Object.keys(props.ingradients)
    .map(igKey => {
      return [...Array(props.ingradients[igKey])].map((_, i)=>{
        return <Burgeringradient key={igKey+i} type={igKey} />
      })
    }).reduce((arr, el) =>{
      return arr.concat(el)
    })
    if(transformIngradient.length === 0) {
      transformIngradient = <p>Iltimos Biror Maxsulot Tanlang!</p>
    }
    
  return (
    <div className={clasess.Burger}>
      <Burgeringradient type="brand-top" />
      {transformIngradient}
      <Burgeringradient type="brand-bottom" />
    </div>
  )
}
export default Burger;