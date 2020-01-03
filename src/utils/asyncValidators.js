import validate from 'validate.js';

import { fakeEmailApi, fakePhoneNumberApi } from './fakeApi';

validate.validators.emailValidator = async (value) => {
  return new validate.Promise(async (resolve) => {

    // a fake api which checks if entered
    // email address is already registered
    const isEmailRegistered = await fakeEmailApi(value);

    if (isEmailRegistered) resolve('^This email is already registered');
    else resolve();
  });
};

validate.validators.phoneNumberValidator = async (phoneNumber) => {
  return new validate.Promise(async (resolve) => {

    // we un-normalize phone number as it
    // is normalized in form of 99999-99999
    // thus we need to un-normalize it by
    // removing - from in between
    const unNormalizedPhoneNumber = `${phoneNumber.slice(0, 5)}${phoneNumber.slice(6, 11)}`;

    // a fake api which checks if entered
    // phone number is already registered
    const isPhoneNumberRegistered = await fakePhoneNumberApi(unNormalizedPhoneNumber);

    if (isPhoneNumberRegistered) resolve('^This phone number is already registered');
    else resolve();
  });
};