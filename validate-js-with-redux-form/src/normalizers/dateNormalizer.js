import moment from 'moment';

const dateNormalizer = (value) => {
  if (!value) {
    return value
  }

  if (typeof (value) === 'object' || value.length >= 20) {
    return moment(new Date(value)).format('DD/MM/YYYY');
  }

  const onlyNums = value.replace(/[^\d]/g, '');

  if (onlyNums.length <= 2) {
    return onlyNums;
  }

  if (onlyNums.length <= 4) {
    return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2)}`;
  }

  return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2, 4)}/${onlyNums.slice(4, 8)}`;
}

export default dateNormalizer;
