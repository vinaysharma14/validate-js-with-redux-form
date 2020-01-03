import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Container, Button, Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import Spinner from '../Spinner';
import TextInput from '../TextInput';
import RadioInput from '../RadioInput';
import FormGroupContainer from '../FormGroupContainer';
import ProfileUploader from '../ProfileUploader'
import Tags from '../Tags';
import DatePicker from '../DatePicker';
import Toastr from '../Toastr';

import validate from '../../utils/validations';
import asyncValidate from '../../utils/asyncValidations';
import dateNormalizer from '../../normalizers/dateNormalizer';
import phoneNormalizer from '../../normalizers/phoneNormalizer';
import zipNormalizer from '../../normalizers/zipNormalizer';

import './style.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      showConfirmedPassword: false,
    }

  }

  togglePasswordVisibility = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }));
  }

  toggleConfirmedPasswordVisibility = () => {
    this.setState(prevState => ({
      showConfirmedPassword: !prevState.showConfirmedPassword,
    }));
  }

  handleFormSubmit = (formValues) => {
    const { signUpRequest, } = this.props;
    signUpRequest(formValues);
  }

  render() {
    const {
      handleSubmit,
      submitting,
      authError,
      toastrVisible,
      toastrHeader,
      toastrBody,
      showToastr,
      hideToastr,
    } = this.props;

    const {
      showPassword,
      showConfirmedPassword,
    } = this.state;

    return (
      <Container className="complex-sign-up-form-container">
        <p className="form-heading">Validate JS With Redux Form</p>

        <form onSubmit={handleSubmit(this.handleFormSubmit)}>
          <FormGroupContainer groupLegend="Personal Details">
            <>
              <Col lg={6} sm={6}>
                <Field
                  name="profile"
                  showToastr={showToastr}
                  component={ProfileUploader}
                />
              </Col>
              <Col lg={6} sm={6}>
                <Field
                  name="skills"
                  label="Skills"
                  options={[
                    { value: 'react js', label: 'React JS', },
                    { value: 'node js', label: 'Node JS', },
                    { value: 'webpack', label: 'Webpack', },
                    { value: 'ajax', label: 'Ajax', },
                  ]}
                  component={Tags}
                />
              </Col>

              <Col lg={6} sm={6}>
                <Field
                  name="firstName"
                  label="First Name"
                  placeholder="John"
                  testingId="firstNameError"
                  type="string"
                  component={TextInput}
                />
              </Col>

              <Col lg={6} sm={6}>
                <Field
                  name="lastName"
                  label="Last Name"
                  placeholder="Appleseed"
                  testingId="lastNameError"
                  type="string"
                  component={TextInput}
                />
              </Col>

              <Col lg={6} sm={6}>
                <Field
                  name="dateOfBirth"
                  label="Date Of Birth"
                  placeholder="dd/mm/yyyy"
                  testingId="dateOfBirthError"
                  component={DatePicker}
                  normalize={dateNormalizer}
                />
              </Col>

              <Col lg={6} sm={6}>
                <Field
                  name="gender"
                  label="Gender"
                  testingId="genderError"
                  options={[
                    'male',
                    'female',
                    'other',
                  ]}
                  component={RadioInput}
                />
              </Col>
            </>
          </FormGroupContainer>

          <FormGroupContainer groupLegend="Account Information">
            <>
              <Col lg={6} sm={6}>
                <Field
                  name="email"
                  label="Email"
                  placeholder="name@example.com"
                  testingId="emailError"
                  type="string"
                  component={TextInput}
                />
              </Col>

              <Col lg={6} sm={6}>
                <Field
                  name="confirmEmail"
                  label="Confirm Email"
                  placeholder="name@example.com"
                  testingId="emailError"
                  type="string"
                  component={TextInput}
                />
              </Col>

              <Col lg={6} sm={6}>
                <Field
                  name="password"
                  label="Password"
                  placeholder="**********"
                  testingId="passwordError"
                  type={showPassword ? 'string' : 'password'}
                  component={TextInput}
                  fieldIcon={<FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />}
                  iconAction={this.togglePasswordVisibility}
                />
              </Col>

              <Col lg={6} sm={6}>
                <Field
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="**********"
                  testingId="confirmPasswordError"
                  type={showConfirmedPassword ? 'string' : 'password'}
                  component={TextInput}
                  fieldIcon={<FontAwesomeIcon icon={showConfirmedPassword ? faEyeSlash : faEye} />}
                  iconAction={this.toggleConfirmedPasswordVisibility}
                />
              </Col>
            </>
          </FormGroupContainer>

          <FormGroupContainer groupLegend="Contact Information">
            <>
              <Col lg={6} sm={6}>
                <Field
                  name="address"
                  label="Address"
                  placeholder="#123 Block A Layout"
                  testingId="addressError"
                  type="string"
                  component={TextInput}
                />
              </Col>

              <Col lg={6} sm={6}>
                <Field
                  name="city"
                  label="City"
                  placeholder="Bengaluru"
                  testingId="cityError"
                  type="string"
                  component={TextInput}
                />
              </Col>

              <Col lg={6} sm={6}>
                <Field
                  name="state"
                  label="State"
                  placeholder="Karnataka"
                  testingId="stateError"
                  type="string"
                  component={TextInput}
                />
              </Col>

              <Col lg={6} sm={6}>
                <Field
                  name="zipCode"
                  label="Zip Code"
                  placeholder="560-076"
                  testingId="zipCodeError"
                  type="string"
                  component={TextInput}
                  normalize={zipNormalizer}
                />
              </Col>

              <Col lg={6} sm={6}>
                <Field
                  name="phoneNumber"
                  label="Phone Number"
                  placeholder="99999-88888"
                  testingId="phoneNumberError"
                  type="string"
                  component={TextInput}
                  normalize={phoneNormalizer}
                />
              </Col>

              <Col lg={6} sm={6}>
                <Field
                  name="alternatePhoneNumber"
                  label="Alternate Phone Number"
                  placeholder="(optional)"
                  testingId="phoneNumberError"
                  type="string"
                  component={TextInput}
                  normalize={phoneNormalizer}
                  optional
                />
              </Col>
            </>
          </FormGroupContainer>

          <Button
            color="primary"
            type="submit"
            className="submit-button"
            disabled={submitting}
          >
            {submitting ? <Spinner /> : 'Sign In'}
          </Button>
        </form>

        <Toastr
          toastrVisible={toastrVisible}
          toastrHeader={toastrHeader}
          toastrBody={toastrBody}
          hideToastr={hideToastr}
        />

        &nbsp;
        {
          authError &&
          (
            <p className="auth-error">
              {authError}
            </p>
          )
        }
        <p className="login-redirect">
          Already have an account?&nbsp;
          <u>Login in here</u>
        </p>
      </Container>
    )
  }
}

const ReduxFormWithValidateJs = reduxForm({
  form: 'Form',
  validate,
  asyncValidate,
  asyncBlurFields: ['email', 'phoneNumber',],
})(Form)

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  signUpRequest: PropTypes.func.isRequired,
  authError: PropTypes.string.isRequired,
  submitting: PropTypes.bool.isRequired,
  toastrVisible: PropTypes.bool.isRequired,
  toastrHeader: PropTypes.string.isRequired,
  toastrBody: PropTypes.string.isRequired,
  showToastr: PropTypes.func.isRequired,
  hideToastr: PropTypes.func.isRequired,
}

export default ReduxFormWithValidateJs;