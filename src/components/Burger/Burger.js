import React from 'react';
// import PropTypes from 'prop-types';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';
import uuid from 'react-uuid';

const Burger = props => {
  let transformedIngredients = [];

  for (const [key, value] of Object.entries(props.ingredients.ingredients)) {
    for (let index = 0; index < value; index++) {
      transformedIngredients.push(<BurgerIngredient type={key} key={uuid()} />);
    }
  }
  let emptyWarning = '';
  if (transformedIngredients.length === 0) {
    emptyWarning = 'Please Add Ingredients!';
  }

  return (
    <div className={classes.OutDiv}>
      <div className={classes.Burger}>
        <BurgerIngredient type="bread-top" />
        {transformedIngredients}
        {emptyWarning}
        <BurgerIngredient type="bread-bottom" />
      </div>
    </div>
  );
};

// Burger.propTypes = {};

export default Burger;
