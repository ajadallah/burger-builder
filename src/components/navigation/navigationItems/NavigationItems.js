import React from 'react';
import NavigationItem from './navigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = () => (
  <nav>
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active>Burger Builder</NavigationItem>
      <NavigationItem link="/" active={false}>Checkout</NavigationItem>
    </ul>
  </nav>
);

export default NavigationItems;
