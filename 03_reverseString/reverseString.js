const reverseString = function(input) {
  let splitString = input.split('');
  let output = splitString.reduceRight((acc, curr) =>
    acc += curr,
    '');

  return output;

};

// Do not edit below this line
module.exports = reverseString;
