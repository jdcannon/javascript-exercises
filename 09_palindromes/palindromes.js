const palindromes = function (phrase) {
  let allowedChars = "abcdefghijklmnopqrstuvwxyz0123456789".split('');
  let testedPhrase = phrase.toLowerCase().split('').filter( (letter) => {
    return allowedChars.includes(letter);
  });
  let reversed = testedPhrase.toReversed();
  return reversed.reduce( (acc, curr, idx) => {
    return acc && testedPhrase[idx] === curr;
  }, true);
  
};

// Do not edit below this line
module.exports = palindromes;
