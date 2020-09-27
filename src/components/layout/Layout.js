/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../navigation/toolbar/Toolbar';

const layout = (props) => (
  <Auxiliary>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </Auxiliary>

);

layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default layout;
