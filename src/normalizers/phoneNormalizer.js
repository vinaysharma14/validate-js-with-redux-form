const phoneNormalizer = (value) => {
  if (!value) {
    return value
  }

  const onlyNums = value.replace(/[^\d]/g, '');

  if (onlyNums.length <= 5) {
    return onlyNums;
  }

  return `${onlyNums.slice(0, 5)}-${onlyNums.slice(5, 10)}`;
}

export default phoneNormalizer;
