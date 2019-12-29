const zipNormalizer = (value) => {
  if (!value) {
    return value
  }

  const onlyNums = value.replace(/[^\d]/g, '');

  if (onlyNums.length <= 3) {
    return onlyNums;
  }

  return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 6)}`;
}

export default zipNormalizer;
