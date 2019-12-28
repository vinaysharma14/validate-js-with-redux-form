import validate from 'validate.js';

const validateForm = values => {
  const constraints = {
    // Personal Details
    firstName: {
      presence: {
        message: '^Required',
      },
    },
    lastName: {
      presence: {
        message: '^Required',
      },
      equality: {
        attribute: 'firstName',
        message: 'cannot be same as first name',
        comparator(lastName, firstName) {
          return lastName.toLowerCase() !== firstName.toLowerCase();
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
  const errors = {};

  Object.keys(validationErrors).forEach((field) => {
    const fieldError = validationErrors[field][0];
    errors[field] = fieldError;
  });

  return errors;
}

export default validateForm;
