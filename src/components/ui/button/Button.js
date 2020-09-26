import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

const Button = (props) => {
  const { clicked, children, btnType } = props;
  return (
    <button
      type="button"
      onClick={clicked}
      className={[classes.Button, classes[btnType]].join(' ')}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
  btnType: PropTypes.string.isRequired,
};

export default Button;