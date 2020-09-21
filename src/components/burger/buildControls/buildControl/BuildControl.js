import React from 'react';

import PropTypes from 'prop-types';
import classes from './BuildControl.module.css';

export default function BuildControl(props) {
  const {
    label,
    added,
    removed,
    disabled,
  } = props;

  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button className={classes.Less} type="button" onClick={removed} disabled={disabled}>Less</button>
      <button className={classes.More} type="button" onClick={added}>More</button>
    </div>
  );
}
BuildControl.propTypes = {
  label: PropTypes.string.isRequired,
  added: PropTypes.func.isRequired,
  removed: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
