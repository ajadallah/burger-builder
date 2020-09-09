import React from 'react';
import PropTypes from 'prop-types';

import Auxiliary from '../../hoc/Auxiliary';


const layout = (props) => {
  return (
    <Auxiliary>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main>{props.children}</main>
    </Auxiliary>

  );
};


layout.propTypes = {

};


export default layout;
