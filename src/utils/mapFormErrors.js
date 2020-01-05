export default (validationErrors) => {
  const errors = {};

  Object.keys(validationErrors).forEach((field) => {
    const fieldError = validationErrors[field][0];
    errors[field] = fieldError;
  });

  return errors;
}