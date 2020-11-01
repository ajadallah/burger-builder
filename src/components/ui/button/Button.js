/* eslint-disable react/prop-types */
import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  const {
    clicked, children, btnType, disabled,
  } = props;
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={clicked}
      className={[classes.Button, classes[btnType]].join(' ')}
    >
      {children}
    </button>
  );
};

export default Button;
