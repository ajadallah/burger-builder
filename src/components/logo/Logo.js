import React from 'react';
import PropTypes from 'prop-types';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

function logo(props) {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  );
}

logo.propTypes = {

};

export default logo;
