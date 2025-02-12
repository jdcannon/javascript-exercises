const fibonacci = function(number) {
  if (typeof(number) == "string") {
    number = Number.parseInt(number);
  }
  if (number < 0) {
    return "OOPS";
  } else if (number == 0) {
    return 0;
  }
  let valuePrev = 0;
  let valueCurr = 1;
  for (let i = 1; i < number; i++) {
    let temp = valueCurr + valuePrev;
    valuePrev = valueCurr;
    valueCurr = temp;
  }
  return valueCurr;
};

// Do not edit below this line
module.exports = fibonacci;
