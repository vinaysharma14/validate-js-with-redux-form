import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Toast, ToastBody, ToastHeader } from 'reactstrap';

import './style.scss';

class Toastr extends Component {
  getClass = () => {
    const { direction, custom, } = this.props;
    const allowedDirections = ['top-right', 'bottom-right',];

    if (allowedDirections.includes(direction)) {
      return direction;
    }

    if (custom) {
      return direction;
    }

    return 'bottom-right';
  }

  render() {
    const {
      toastrVisible,
      toastrHeader,
      toastrBody,
      hideToastr,
    } = this.props;

    return (
      <div className={`${this.getClass()}`}>
        <Toast isOpen={toastrVisible}>
          <ToastHeader toggle={hideToastr}>
            {toastrHeader}
          </ToastHeader>
          <ToastBody>
            {toastrBody}
          </ToastBody>
        </Toast>
      </div>
    )
  }
}

Toastr.propTypes = {
  toastrVisible: PropTypes.bool.isRequired,
  toastrHeader: PropTypes.string.isRequired,
  toastrBody: PropTypes.string.isRequired,
  hideToastr: PropTypes.func.isRequired,
  direction: PropTypes.string,
  custom: PropTypes.bool,
}

Toastr.defaultProps = {
  direction: '',
  custom: false,
}

export default Toastr;
