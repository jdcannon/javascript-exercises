const removeFromArray = function(arr, ...values) {
  const result = arr.filter((value) => !values.includes(value));
  return result;

};

// Do not edit below this line
module.exports = removeFromArray;
