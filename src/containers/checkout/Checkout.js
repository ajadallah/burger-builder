import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import CheckoutSummary from '../../components/order/checkoutSummary/CheckoutSummary'
import ContactData from './contactData/ContactData';

export default class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0
  }

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === 'price') {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ ingredients: ingredients, totalPrice: price })
  }

  checkoutCanceledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    const { ingredients, totalPrice } = this.state;
    return (
      <div>
        <CheckoutSummary
          ingredients={ingredients}
          checkoutCanceled={this.checkoutCanceledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.path + '/contact-data'}
          render={(props) => (<ContactData
            ingredients={ingredients}
            price={totalPrice}
            {...props}
          />)}

        />
      </div>
    )
  }
}
