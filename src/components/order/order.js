import React from 'react';

import classes from './order.module.css';

const order = (props) => (
  <div className={classes.Order}>
    <p>Ingredients: </p>
    <p>
      Price:
      <strong>USD</strong>
    </p>
  </div>
);

export default order;
