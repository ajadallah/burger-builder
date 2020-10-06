import React, { Component } from 'react'
import CheckoutSummary from '../../components/order/checkoutSummary/CheckoutSummary'

export default class Checkout extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    }
  }

  checkoutCanceledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    const { ingredients } = this.state;
    return (
      <div>
        <CheckoutSummary
          ingredients={ingredients}
          checkoutCanceled={this.checkoutCanceledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
      </div>
    )
  }
}
