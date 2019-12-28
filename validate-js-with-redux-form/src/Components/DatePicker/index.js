/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/forbid-prop-types */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';

import TextInput from '../TextInput';

import 'react-datepicker/dist/react-datepicker.css';
import './style.scss';

class CustomInput extends Component {
  render() {
    const {
      input,
      label,
      meta,
      datePlaceholder,
      onClick,
      testingId,
      customClass,
    } = this.props;

    return (
      <TextInput
        input={input}
        meta={meta}
        label={label}
        placeholder={datePlaceholder}
        onClick={onClick}
        type="string"
        testingId={testingId}
        customClass={customClass}
      />
    );
  }
}


CustomInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  datePlaceholder: PropTypes.string.isRequired,
  testingId: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  customClass: PropTypes.string.isRequired,
}

CustomInput.defaultProps = {
  onClick: () => { },
}

const DatePickerInput = ({
  input,
  meta,
  label,
  placeholder,
  testingId,
  customClass,
}) => {
  return (
    <div className="date-picker-container">
      <DatePicker
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...input}
        customInput={
          <CustomInput
            input={input}
            meta={meta}
            label={label}
            datePlaceholder={placeholder}
            testingId={testingId}
            customClass={customClass}
          />
        }
      />
    </div>
  );
}

DatePickerInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  testingId: PropTypes.string.isRequired,
  customClass: PropTypes.string,
}

DatePickerInput.defaultProps = {
  customClass: '',
}

export default DatePickerInput
