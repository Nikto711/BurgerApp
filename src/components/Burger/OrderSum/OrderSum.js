import React from "react";
import Aux from '../../../hoc/Aux1';
import Button from '../../UI/Button/Button';

const OrderSum = (props) => {
  const controls = [
    { label: "Salat", type: "salad" },
    { label: "Kolbasa", type: "sausage" },
    { label: "Pishloq", type: "cheese" },
    { label: "Go'sht", type: "meat" },
  ];
  
  const ingradientSummary = Object.keys(props.ingradients)
    .map((igKey, i) => {
      return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{controls[i].label}</span>: {props.ingradients[igKey]}</li>
    })
  return (
    <Aux>
      <h3>Sizning Buyurtmangiz</h3>
      <p>Tanlangan maxsulotlarizni shu yerda ko'rishiz mumkin.</p>
      <ul>
        {ingradientSummary}
      </ul>
      <p><strong>Jami: ${props.price.toFixed(2)}</strong></p>
      <Button btnType='Danger' clicked={props.purchaseCancelHandler}> Bekor qilish</Button>
      <Button btnType='Success' clicked={props.purchaseContinueHandler} > Davom etish </Button>
    </Aux>
  )
}

export default OrderSum;