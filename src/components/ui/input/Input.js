import React from 'react';
import PropTypes from 'prop-types';

import classes from './Input.module.css';

const Input = (props) => {
  const {
    label, elementType, elementConfig, value,
  } = props;
  let inputElement = null;

  switch (elementType) {
    case ('input'):
      inputElement = <input className={classes.inputElement} {...elementConfig} value={value} />;
      break;
    case ('textarea'):
      inputElement = <textarea className={classes.inputElement} {...elementConfig} />;
      break;
    default:
      inputElement = <input className={classes.inputElement} {...elementConfig} />;
  }

  return (
    <div className={classes.Input}>
      <label htmlFor="inputLabel" className={classes.Label}>{label}</label>
      {inputElement}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  elementType: PropTypes.string.isRequired,
  elementConfig: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
