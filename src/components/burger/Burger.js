/* eslint-disable react/no-array-index-key */
import React from 'react';

import PropTypes from 'prop-types';
import classes from './Burger.module.css';
import BurgerIngredient from './burgerIngredient/BurgerIngredient';

const burger = (props) => {
  const { ingredients } = props;
  let transformedIngredients = Object.keys(ingredients)
    .map((igKey) => [...Array(ingredients[igKey])]
      .map((_, i) => <BurgerIngredient key={igKey + i} type={igKey} />))
    .reduce((arr, el) => arr.concat(el), []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;

burger.propTypes = {
  ingredients: PropTypes.func.isRequired,
};
