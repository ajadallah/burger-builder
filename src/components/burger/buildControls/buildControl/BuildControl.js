import React from 'react';

import PropTypes from 'prop-types';
import classes from './BuildControl.module.css';

export default function BuildControl(props) {
  const { label } = props;

  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button className={classes.Less} type="button">Less</button>
      <button className={classes.More} type="button">More</button>
    </div>
  );
}
BuildControl.propTypes = {
  label: PropTypes.string.isRequired,
};
