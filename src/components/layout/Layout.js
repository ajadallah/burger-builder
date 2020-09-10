/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.module.css';

const layout = (props) => (
  <Auxiliary>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Auxiliary>

);

layout.propTypes = {
  children: PropTypes.objectOf.isRequired,
};

export default layout;
