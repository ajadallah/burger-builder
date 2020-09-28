import React from 'react';
import PropTypes from 'prop-types';
import classes from './NavigationItem.module.css';

const NavigationItem = (props) => {
  const { link, children, active } = props;
  return (
    <li className={classes.NavigationItem}>
      <a
        href={link}
        className={
          active ? classes.active : null
        }
      >
        {children}

      </a>
    </li>
  );
};

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default NavigationItem;
