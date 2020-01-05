import validate from 'validate.js';
import './asyncValidators';

import mapFormErrors from './mapFormErrors';

const asyncFormValidation = async values => {

  // the validators must work only
  // if we receive their corresponding
  // values from the form
  const constraints = {
    email: { emailValidator: !!values.email, },
    phoneNumber: { phoneNumberValidator: !!values.phoneNumber, },
  };

  // validate the fields asynchronously
  // with the promise provided
  // by validate.js library
  const validationErrors = await validate
    .async(values, constraints)

    // first callback is for success and returns
    // an empty string
    // second callback is for error and returns
    // the error message corresponding to
    // it's field
    .then(() => '', err => err);

  // if there are any errors from the
  // validators then map the errors
  // with the respective fields as
  // { fieldName: errorMessage, }
  // and send the errors back to form
  if (validationErrors) {
    throw mapFormErrors(validationErrors);
  }
};

export default asyncFormValidation;
