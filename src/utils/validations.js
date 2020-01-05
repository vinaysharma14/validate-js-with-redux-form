import validate from 'validate.js';
import './customValidators';

const validateForm = values => {
  const constraints = {
    // Personal Details
    firstName: {
      presence: {
        message: '^Required',
      },

      // using our own customn validator
      // to check if first name is string or not
      // which has been imported from customValidators
      // named as isString to which we can pass args
      // in form of a single string or an object
      // composed of multiple key and value pair
      isString: {},

      // or we can use a regex like this
      // to specify if value is string or not
      // by using the format validator which
      // tests the value against the
      // regex provided by us

      // format: {
      //   pattern: '[A-Za-z]+',
      //   flags: 'i',
      //   message: 'cannot have numbers 0-9 and special characters such as _ ! @ # % ^',
      // },
    },
    lastName: {
      presence: {
        message: '^Required',
      },

      // same custom validator as that of
      // first name is used here to check if
      // last name is string or not
      isString: {},

      equality: {
        attribute: 'firstName',
        message: 'cannot be same as first name',
        comparator(lastName, firstName) {
          if (firstName) {
            return lastName.toLowerCase() !== firstName.toLowerCase();
          }

          return false;
        },
      },
    },
    dateOfBirth: {
      presence: {
        message: '^Required',
      },
      length: {
        is: 10,
        message: '^Invalid date',
      },
    },
    gender: {
      presence: {
        message: '^Required',
      },
    },

    // Account Information
    email: {
      presence: {
        message: '^Required',
      },
      email: {
        message: '^Invalid format',
      },
    },
    confirmEmail: {
      presence: {
        message: '^Required',
      },
      email: {
        message: '^Invalid format',
      },
      equality: {
        attribute: 'email',
        message: '^Email doesn\'t match',
      },
    },
    phoneNumber: {
      presence: {
        message: '^Required',
      },
      length: {
        is: 11,
        message: 'too short',
      },
    },
    alternatePhoneNumber: {
      length: {
        is: 11,
        message: 'too short',
      },
      equality: {
        attribute: 'phoneNumber',
        message: '^Cannot be same as primary phone number',
        comparator(alternatePhone, primaryPhone) {
          return alternatePhone !== primaryPhone;
        },
      },
    },
    password: {
      presence: {
        message: '^Required',
      },
      length: {
        minimum: 6,
        message: '^Minimum length should 6',
      },
    },
    confirmPassword: {
      presence: {
        message: '^Required',
      },
      equality: {
        attribute: 'password',
        message: '^Password doesn\'t match',
      },
    },

    // Contact Information
    address: {
      presence: {
        message: '^Required',
      },
    },
    city: {
      presence: {
        message: '^Required',
      },
    },
    state: {
      presence: {
        message: '^Required',
      },
    },
    zipCode: {
      presence: {
        message: '^Required',
      },
      length: {
        is: 7,
        message: 'too short',
      },
    },
  }

  const validationErrors = validate(values, constraints);

  if (validationErrors) {
    const errors = {};

    Object.keys(validationErrors).forEach((field) => {
      const fieldError = validationErrors[field][0];
      errors[field] = fieldError;
    });

    return errors;
  }

  return {};
}

export default validateForm;
