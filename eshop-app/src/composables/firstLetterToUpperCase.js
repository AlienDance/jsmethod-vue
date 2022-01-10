const firstLetterToUpperCase =  string => {
  const firstLetterCap = string.slice(0, 1).toUpperCase();
  const rest = string.slice(1);
  return firstLetterCap + rest;
};

export default firstLetterToUpperCase;
