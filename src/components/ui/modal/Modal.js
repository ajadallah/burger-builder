import React from 'react';
import PropTypes from 'prop-types';
import classes from './Modal.module.css';

function Modal(props) {
  const { children } = props;

  return (
    <div className={classes.Modal}>{children}</div>
  );
}

Modal.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Modal;
