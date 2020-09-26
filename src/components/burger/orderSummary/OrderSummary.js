import React from 'react';
import PropTypes from 'prop-types';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../ui/button/Button';

function OrderSummary(props) {
  const { ingredients, purchaseCanceled, purchaseContinued } = props;
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
      <Button btnType="Danger" clicked={purchaseCanceled}>CANCEL</Button>
      <Button btnType="Success" clicked={purchaseContinued}>CONTINUE</Button>
    </Auxiliary>
  );
}

OrderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  purchaseCanceled: PropTypes.func.isRequired,
  purchaseContinued: PropTypes.func.isRequired,
};

export default OrderSummary;
