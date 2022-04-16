import React, { Component } from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import Modal from '../../components/UI/Modal';
import OrderSum from '../../components/Burger/OrderSum/OrderSum';
import Aux from '../../hoc/Aux1';

const ingradientPrices = {
  salad: 0.5,
  sausage: 0.7,
  cheese: 0.4,
  meat: 1.3
}

class BurgerBuilder extends Component {
  state = {
    ingradient: {
      salad: 0,
      sausage: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  }

  updatePurchasableHandler() {
    const ingradients = {
      ...this.state.ingradient
    }
    const sum = Object.keys(ingradients)
      .map((igKey) => {
        return ingradients[igKey]
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0)
      this.setState({purchasable: sum > 0})

      console.log(sum);
  }
  removePurchasableHandler() {
    const ingradients = {
      ...this.state.ingradient
    }
    const sum = Object.keys(ingradients)
      .map((igKey) => {
        return ingradients[igKey]
      })
      .reduce((sum, el) => {
        return sum + el;
      }, -2)
      this.setState({purchasable: sum > 0})

      console.log(sum);
  }

  addIngradientHandler = (type) => {
    const oldCount = this.state.ingradient[type];
    const updateCount = oldCount + 1;
    const updateIngradients = {
      ...this.state.ingradient
    }
    updateIngradients[type] = updateCount;
    const priceAddition = ingradientPrices[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = priceAddition + oldPrice
    this.setState({totalPrice: newPrice, ingradient: updateIngradients})
    this.updatePurchasableHandler();
  }

  purchaseHandler = () => {
    this.setState({purchasing: true})
  } 
  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }
  purchaseContinueHandler = () => {
    alert("Siz buyurtma berdingiz!");
  }

  removeIngradientHandler = (type) => {
    const oldCount = this.state.ingradient[type];
    if(oldCount <= 0) {
      return;
    }
    const updateCount = oldCount - 1;
    const updateIngradients = {
      ...this.state.ingradient
    }
    updateIngradients[type] = updateCount;
    const priceDeduction = ingradientPrices[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction
    this.setState({totalPrice: newPrice, ingradient: updateIngradients})
    this.removePurchasableHandler()
  }

  render() {
    const disabledInfo = {
      ...this.state.ingradient
    }
    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSum
            ingradients={this.state.ingradient}
            price={this.state.totalPrice}
            purchaseCancelHandler={this.purchaseCancelHandler}
            purchaseContinueHandler={this.purchaseContinueHandler} />
        </Modal>
        <Burger ingradients={this.state.ingradient} />
        <BuildControls
          ingradientsAdded={this.addIngradientHandler}
          ingradientsRemoved={this.removeIngradientHandler}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
          price={this.state.totalPrice} />
      </Aux>
    );
  }
}

export default BurgerBuilder;