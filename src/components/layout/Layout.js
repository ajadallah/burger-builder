/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../navigation/toolbar/Toolbar';
import SideDrawer from '../navigation/sideDrawer/SideDrawer';

const layout = (props) => (
  <Auxiliary>
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content}>{props.children}</main>
  </Auxiliary>

);

layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default layout;
