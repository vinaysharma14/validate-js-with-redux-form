import validate from 'validate.js';

validate.validators.isString = (value) => {
  const regexp = /^[A-Za-z ]+$/;

  if (!regexp.test(value)) {
    return 'cannot have numbers 0-9 and special characters such as _ ! @ # % ^';
  }

  return '';
}