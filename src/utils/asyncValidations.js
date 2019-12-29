/* eslint-disable no-throw-literal */
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = async (values) => {
  await sleep(1000);
  if (['name@example.com',].includes(values.email)) {
    throw {
      email: 'This email is already registered',
    };
  }
}

export default asyncValidate;
