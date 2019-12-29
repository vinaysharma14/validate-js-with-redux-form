/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropType from 'prop-types';

import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

import Spinner from '../Spinner';

import './style.scss';

const TextInput = ({
  input,
  meta,
  label,
  placeholder,
  type,
  optional,
  testingId,
  onClick,
  customClass,
  fieldIcon,
  iconAction,
}) => {
  return (
    <FormGroup className={`text-input-container ${customClass}`}>
      <Label>
        {label}
      </Label>
      <span className="field-icon" onClick={iconAction}>
        {fieldIcon}
      </span>
      {
        meta.asyncValidating &&
        <Spinner customClass="async-spinner" solid />
      }
      <Input
        type={type}
        placeholder={placeholder}
        valid={optional && !input.value ? false : meta.valid}
        invalid={meta.error && meta.touched}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...input}
        onClick={onClick}
      />
      <FormFeedback type="invalid" data-testid={testingId}>
        {meta.error}
      </FormFeedback>
    </FormGroup>
  )
}

TextInput.propTypes = {
  input: PropType.object.isRequired,
  meta: PropType.object.isRequired,
  label: PropType.string.isRequired,
  placeholder: PropType.string,
  type: PropType.string.isRequired,
  optional: PropType.bool,
  testingId: PropType.string.isRequired,
  onClick: PropType.func,
  customClass: PropType.string,
  fieldIcon: PropType.element,
  iconAction: PropType.func,
}

TextInput.defaultProps = {
  placeholder: '',
  optional: false,
  onClick: () => { },
  customClass: '',
  fieldIcon: null,
  iconAction: () => { },
}

export default TextInput;
