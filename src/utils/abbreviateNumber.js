const abbreviateNumber = (number) => {
  const abbreviations = {
    K: 1000,
    M: 1000000,
    B: 1000000000,
    T: 1000000000000
  };
  
  for (let key in abbreviations) {
    if (number >= abbreviations[key]) {
      return `${(number/abbreviations[key]).toFixed(1)}${key}`;
    }
  }
  
  return number?.toString();
}

export default abbreviateNumber;