import React, { Component } from 'react';

import Order from '../../components/order/order';

export default class Orders extends Component {
  render() {
    return (
      <div>
        <Order />
        <Order />
      </div>
    );
  }
}
