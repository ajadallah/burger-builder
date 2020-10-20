import React from 'react';
import PropTypes from 'prop-types';

import classes from './Input.module.css';

const Input = (props) => {
  const {
    label, elementType, elementConfig, value, changed, invalid, shouldValidate, touched, valueType,
  } = props;
  let inputElement = null;
  const inputClasses = [classes.inputElement];

  if (invalid && shouldValidate && touched) {
    inputClasses.push(classes.Invalid);
  }

  switch (elementType) {
    case ('input'):
      inputElement = <input className={inputClasses.join(' ')} {...elementConfig} value={value} onChange={changed} />;
      break;
    case ('textarea'):
      inputElement = <textarea className={inputClasses.join(' ')} {...elementConfig} onChange={changed} />;
      break;
    case ('select'):
      inputElement = (
        <select className={inputClasses.join(' ')} value={value} onChange={changed}>
          {elementConfig.options.map((option) => (
            <option key={Math.random()} value={option.value}>{option.displayValue}</option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = <input className={inputClasses.join(' ')} {...elementConfig} onChange={changed} />;
  }

  let validationError = null;
  if (invalid && touched) {
    validationError = (
      <p className={classes.ValidationError}>
        Please enter a valid
        {' '}
        {valueType}
        !
      </p>
    );
  }

  return (
    <div className={classes.Input}>
      <label htmlFor="inputLabel" className={classes.Label}>{label}</label>
      {inputElement}
      {validationError}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  elementType: PropTypes.string.isRequired,
  elementConfig: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  shouldValidate: PropTypes.bool.isRequired,
  touched: PropTypes.bool.isRequired,
  valueType: PropTypes.string.isRequired,
};

export default Input;
