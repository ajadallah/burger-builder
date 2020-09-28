import React from 'react';
import PropTypes from 'prop-types';

const DrawerToggle = (props) => {
  const { clicked } = props;
  return (
    <div onClick={clicked}>
      MENU
    </div>
  );
};

DrawerToggle.propTypes = {
  clicked: PropTypes.func.isRequired,
};

export default DrawerToggle;
