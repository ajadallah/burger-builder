import React from 'react';
import PropTypes from 'prop-types';
import Burger from '../../burger/Burger';
import Button from '../../ui/button/Button';
import classes from './CheckoutSummary.module.css';

const CheckoutSummary = (props) => {
  const { ingredients, checkoutCanceled, checkoutContinued } = props;
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Enjoy your burger!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={ingredients} />
      </div>
      <Button
        btnType="Danger"
        clicked={checkoutCanceled}
      >
        CANCEL

      </Button>
      <Button
        btnType="Success"
        clicked={checkoutContinued}
      >
        CONTINUE

      </Button>
    </div>
  );
};

CheckoutSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  checkoutCanceled: PropTypes.func.isRequired,
  checkoutContinued: PropTypes.func.isRequired,
};

export default CheckoutSummary;
