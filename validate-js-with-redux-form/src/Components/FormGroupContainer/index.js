import React from 'react';
import PropType from 'prop-types';

import { Row, Col } from 'reactstrap';

import './style.scss';

const FormGroupContainer = ({
  groupLegend,
  children,
}) =>
  (
    <>
      <Row className="form-group-container">
        <Col lg={12}>
          <p className="form-legend">{groupLegend}</p>
        </Col>
        {children}
      </Row>
      <br />
    </>
  );

FormGroupContainer.propTypes = {
  groupLegend: PropType.string.isRequired,
  children: PropType.element.isRequired,
}

export default FormGroupContainer;
