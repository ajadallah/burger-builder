import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../logo/Logo';
import NavigationItems from '../navigationItems/NavigationItems';
import classes from './SideDrawer.module.css';

const SideDrawer = (props) => (
  <div className={classes.SideDrawer}>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <NavigationItems />
  </div>
);

SideDrawer.propTypes = {

};

export default SideDrawer;
