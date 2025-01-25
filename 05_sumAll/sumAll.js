const sumAll = function(a, b) {
  if ( !((typeof(a) == "number") && (a > 0) && (a%1 == 0)) ) {
    return "ERROR";
  }
  if ( !((typeof(b) == "number") && (b > 0) && (b%1 == 0)) ) {
    return "ERROR";
  }

  let numFrom = Math.min(a, b)
  let numTo = Math.max(a, b)

  let acc = 0
  for (let i = numFrom; i <= numTo; i++) {
    acc += i;
  }
  return acc;

};

// Do not edit below this line
module.exports = sumAll;
