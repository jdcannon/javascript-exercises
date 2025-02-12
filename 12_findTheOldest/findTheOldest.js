const findTheOldest = function(people) {
  const checkAge = function(person){
    if (Object.hasOwn(person, "yearOfDeath")) {
      return person.yearOfDeath - person.yearOfBirth;
    } else {
      return 2025 - person.yearOfBirth;
    }
  }

  let oldest = [0, {}];
  people.forEach( (person) => {
    let age = checkAge(person);
    if (oldest[0] < age) {
      oldest[0] = age;
      oldest[1] = person;
    }
  })
  return oldest[1];

};

// Do not edit below this line
module.exports = findTheOldest;
