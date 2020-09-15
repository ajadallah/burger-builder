import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/burger/Burger';

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },
    };
  }

  render() {
    const { ingredients } = this.state;
    return (
      <Auxiliary>
        <Burger ingredients={ingredients} />
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
