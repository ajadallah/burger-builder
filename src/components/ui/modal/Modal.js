import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Modal.module.css';
import Auxiliary from '../../../hoc/auxiliary/Auxiliary';
import Backdrop from '../backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps) {
    // eslint-disable-next-line react/destructuring-assignment
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  render() {
    const { children, show, modalClosed } = this.props;
    return (
      <Auxiliary>
        <Backdrop show={show} clicked={modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: show ? '1' : '0',
          }}
        >
          {children}

        </div>
      </Auxiliary>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  modalClosed: PropTypes.func.isRequired,
};

export default Modal;
