import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
import OrderButton from '../BuildOrderButton/OrderButton';
import ResetButton from '../ResetButton/ResetButton';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <div>Prices: {props.price.toFixed(2)} $</div>
    {controls.map(ctrl => (
      <BuildControl
        disabled={props.disableCheckerObj[ctrl.type]}
        removed={() => props.decreaseIngredientListener(ctrl.type)}
        added={() => props.addIngredientListener(ctrl.type)}
        key={ctrl.label}
        label={ctrl.type}
      />
    ))}
    <div className={classes.ButtonsDiv}>
      <OrderButton
        state={props.state}
        totalPrice={props.price.toFixed(2)}
      ></OrderButton>
      <ResetButton
        price={props.price.toFixed(2)}
        click={props.click}
      ></ResetButton>
    </div>
  </div>
);

export default buildControls;
