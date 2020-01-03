const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fakeEmailApi = async email => {
  await sleep(500);

  return email === 'name@example.com';
};

export const fakePhoneNumberApi = async phoneNumber => {
  await sleep(500);

  return phoneNumber === '9999999999';
};