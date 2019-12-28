import React from 'react';
import PropTypes from 'prop-types';

import { Spinner as BtSpinner } from 'reactstrap';

import './style.scss';

const Spinner = ({
  solid,
  customClass,
}) => {
  return (
    <BtSpinner
      className={
        solid ?
          `spinner solid ${customClass}` :
          `spinner ${customClass}`
      }
    />
  )
}

Spinner.propTypes = {
  solid: PropTypes.bool,
  customClass: PropTypes.string,
}

Spinner.defaultProps = {
  solid: false,
  customClass: '',
}

export default Spinner;
