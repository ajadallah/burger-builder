import React from 'react';
import PropTypes from 'prop-types';
import classes from './Toolbar.module.css';
import Logo from '../../logo/Logo';
import NavigationItems from '../navigationItems/NavigationItems';
import DrawerToggle from '../sideDrawer/drawerToggle/DrawerToggle';

const Toolbar = (props) => {
  const { drawerToggleClicked } = props;
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={drawerToggleClicked} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <div className={classes.DesktopOnly}>
        <NavigationItems />
      </div>
    </header>
  );
};
Toolbar.propTypes = {
  drawerToggleClicked: PropTypes.func.isRequired,
};

export default Toolbar;
