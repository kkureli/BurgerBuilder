import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

export default class BurgerBuilder extends Component {
  // constructor(props){
  //     super(props){
  //         super(props);
  //         this.state = {...}
  //     }
  // }

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updateCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };

  decreaseIngredientHandler = type => {
    if (this.state.ingredients[type] > 0) {
      const oldCount = this.state.ingredients[type];
      const updateCount = oldCount - 1;
      const updatedIngredients = {
        ...this.state.ingredients,
      };
      updatedIngredients[type] = updateCount;
      const priceSubtraction = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceSubtraction;
      this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    }
  };

  resetButtonListener = () => {
    const defaultState = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },
      totalPrice: 4,
    };
    this.setState({
      totalPrice: defaultState.totalPrice,
      ingredients: defaultState.ingredients,
    });
  };

  render() {
    const disableChecker = { ...this.state.ingredients };
    for (const key in disableChecker) {
      if (disableChecker[key] <= 0) {
        disableChecker[key] = true;
      } else {
        disableChecker[key] = false;
      }
    }
    return (
      <Aux>
        <Burger ingredients={this.state}></Burger>
        <BuildControls
          state={this.state.ingredients}
          price={this.state.totalPrice}
          disableCheckerObj={disableChecker}
          buttonStatus={this.state}
          decreaseIngredientListener={this.decreaseIngredientHandler}
          addIngredientListener={this.addIngredientHandler}
          click={this.resetButtonListener}
        />
      </Aux>
    );
  }
}
