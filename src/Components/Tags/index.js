/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropType from 'prop-types';

import { Label } from 'reactstrap';
import Select from 'react-select';

import './style.scss';

const Tags = ({
  label,
  options,
  input,
  customClass,
}) =>
  (
    <div className={`tags-container ${customClass}`}>
      <Label>
        {label}
      </Label>
      <Select
        options={options}
        onChange={input.onChange}
        isMulti
      />
    </div>
  );

Tags.propTypes = {
  label: PropType.string.isRequired,
  input: PropType.object.isRequired,
  options: PropType.arrayOf(PropType.shape({
    value: PropType.string.isRequired,
    label: PropType.string.isRequired,
  })).isRequired,
  customClass: PropType.string,
}

Tags.defaultProps = {
  customClass: '',
}

export default Tags;
