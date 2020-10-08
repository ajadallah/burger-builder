import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './NavigationItem.module.css';

const NavigationItem = (props) => {
  const { link, children } = props;
  return (
    <li className={classes.NavigationItem}>
      <NavLink
        to={link}
        exact
        activeClassName={classes.active}
      >
        {children}

      </NavLink>
    </li>
  );
};

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default NavigationItem;
