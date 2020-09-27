import React from 'react';
import PropTypes from 'prop-types';
import classes from './Toolbar.module.css';
import Logo from '../../logo/Logo';

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav>...</nav>
  </header>
);

Toolbar.propTypes = {

};

export default Toolbar;
