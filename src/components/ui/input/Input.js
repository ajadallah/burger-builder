import React from 'react';
import PropTypes from 'prop-types';

import classes from './Input.module.css';

const Input = (props) => {
  const { label, inputtype } = props;
  let inputElement = null;

  switch (inputtype) {
    case ('input'):
      inputElement = <input className={classes.inputElement} {...props} />;
      break;
    case ('textarea'):
      inputElement = <textarea className={classes.inputElement} {...props} />;
      break;
    default:
      inputElement = <input className={classes.inputElement} {...props} />;
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
  inputtype: PropTypes.string.isRequired,
};

export default Input;
