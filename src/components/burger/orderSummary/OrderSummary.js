import React from 'react';
import PropTypes from 'prop-types';
import Auxiliary from '../../../hoc/Auxiliary';

function OrderSummary(props) {
  const { ingredients } = props;
  const ingredientSummary = Object.keys(ingredients)
    .map((igKey) => (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>
          {igKey}
        </span>
        :
        {' '}
        {ingredients[igKey]}
      </li>
    ));

  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to Checkout?</p>
      <button type="button">CANCEL</button>
      <button type="button">CONTINUE</button>
    </Auxiliary>
  );
}

OrderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
};

export default OrderSummary;
