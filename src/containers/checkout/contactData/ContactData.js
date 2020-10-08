import React, { Component } from 'react'

import Button from '../../../components/ui/button/Button'
import classes from './ContactData.module.css'
import axios from '../../../axios-orders';
import Spinner from '../../../components/ui/spinner/Spinner';

export default class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Aref',
        address: {
          street: 'Test Street',
          zipCode: '12345',
          country: 'Tanzania'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  }

  render() {
    const { loading } = this.state;
    let form = (<form>
      <input className={classes.Input} type='text' name='name' placeholder='Your Name' />
      <input className={classes.Input} type='email' name='email' placeholder='Your Email' />
      <input className={classes.Input} type='text' name='street' placeholder='Your Street' />
      <input className={classes.Input} type='text' name='postal' placeholder='Postal Code' />
      <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
    </form>);
    if (loading) {
      form = <Spinner />
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Data</h4>
        {form}
      </div>
    )
  }
}
