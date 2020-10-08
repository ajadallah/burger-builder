import React from 'react';

import classes from './order.module.css';

const order = (props) => {
  const ingredients = [];

  for (const ingredientName in props.ingredients) {
    if (Object.prototype.hasOwnProperty.call(props.ingredients, ingredientName)) {
      ingredients.push({
        name: ingredientName,
        amount: props.ingredients[ingredientName],
      });
    }
  }

  const ingredientOutput = ingredients.map((ig) => (
    <span
      key={Math.random()}
      style={{
        textTransform: 'capitalize',
        display: 'inline-block',
        margin: '0 8px',
        border: '1px solid #ccc',
        padding: '5px',
      }}
    >
      {ig.name}
      (
      {ig.amount}
      )
    </span>
  ));

  return (
    <div className={classes.Order}>
      <p>
        Ingredients:
        {' '}
        {ingredientOutput}
      </p>
      <p>
        Price:
        <strong>
          USD
          {' '}
          {Number.parseFloat(props.price).toFixed(2)}
        </strong>
      </p>
    </div>
  );
};

export default order;
