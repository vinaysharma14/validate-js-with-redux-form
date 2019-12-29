/* eslint-disable react/forbid-prop-types */
import React, { Fragment } from 'react';
import PropType from 'prop-types';

import { Field } from 'redux-form';
import { Label } from 'reactstrap';

import './style.scss';

const RadioInput = ({
  label,
  options,
  meta,
  input,
  customClass,
}) => {
  const invalid = meta.touched && meta.error;

  return (
    <div className={`radio-input-container ${customClass}`}>
      <Label className={invalid ?
        'radio-input-label invalid' :
        'radio-input-label'}
      >
        {label}
        {
          invalid &&
          <span className="radio-error">{meta.error}</span>
        }
      </Label>
      {
        options.map((optionName) => (
          <Fragment key={optionName}>
            <Field
              className="radio-button"
              name={input.name}
              component="input"
              type="radio"
              value={optionName}
            />
            <Label className="radio-button-label">
              {optionName.charAt(0).toUpperCase() + optionName.slice(1)}
            </Label>
          </Fragment>
        ))
      }
    </div>
  )
}

RadioInput.propTypes = {
  label: PropType.string.isRequired,
  options: PropType.array.isRequired,
  meta: PropType.object.isRequired,
  input: PropType.object.isRequired,
  customClass: PropType.string,
}

RadioInput.defaultProps = {
  customClass: '',
}

export default RadioInput;
