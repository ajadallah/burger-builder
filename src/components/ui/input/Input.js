import React from 'react';
import PropTypes from 'prop-types';

import classes from './Input.module.css';

const Input = (props) => {
  const {
    label, elementType, elementConfig, value, changed,
  } = props;
  let inputElement = null;

  switch (elementType) {
    case ('input'):
      inputElement = <input className={classes.inputElement} {...elementConfig} value={value} onChange={changed} />;
      break;
    case ('textarea'):
      inputElement = <textarea className={classes.inputElement} {...elementConfig} onChange={changed} />;
      break;
    case ('select'):
      inputElement = (
        <select className={classes.inputElement} value={value} onChange={changed}>
          {elementConfig.options.map((option) => (
            <option key={Math.random()} value={option.value}>{option.displayValue}</option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = <input className={classes.inputElement} {...elementConfig} onChange={changed} />;
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
  elementConfig: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired,
};

export default Input;
