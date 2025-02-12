const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(list) {
  return list.reduce( (acc, curr) => acc + curr, 0 );
};

const multiply = function(list) {
  return list.reduce ( (acc, curr) => acc * curr, 1 );
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  let acc = 1;
  for (let i = 1; i <= a; i++) {
    acc *= i;
  }
  return acc;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
