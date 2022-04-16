import React from 'react';

import clasess from "./Burgeringradient.module.css";

const Burgeringradient = (props) => {
  let ingradient = null;
  
  switch(props.type) {
    case("brand-top"):
      ingradient = <div className={clasess.BrandTop}>
                      <div className={clasess.Seeds1}></div>
                      <div className={clasess.Seeds2}></div>
                    </div>
      break;
    case("brand-bottom"):
      ingradient = <div className={clasess.BrandBottom}></div>
      break;
    case("meat"):
      ingradient = <div className={clasess.Meat}></div>
      break;
    case("cheese"):
      ingradient = <div className={clasess.Cheese}></div>
      break;
    case("salad"):
      ingradient = <div className={clasess.Salad}></div>
      break;
    case("sausage"):
      ingradient = <div className={clasess.Sausage}></div>
      break;
    default: ingradient = null;
  }

  return ingradient;
}
export default Burgeringradient;