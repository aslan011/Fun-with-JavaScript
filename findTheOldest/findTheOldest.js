const findTheOldest = ([...people]) => {
  let age = 0;
  let Person = {};
  let tempAge = 0;
  people.forEach(person => {
    if (person.yearOfDeath == null) {
      const year = new Date().getFullYear();
      tempAge = year - person.yearOfBirth;
    } else {
      tempAge = person.yearOfDeath - person.yearOfBirth;
    }
    if (tempAge > age) {
      age = tempAge;
      Person = person;
    }
  });
  return Person;
};

module.exports = findTheOldest;
