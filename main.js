//Hello

let i = 1;

do {
  console.log(i);
  i++;
} while (i < 1001);

let person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female",
};

console.log(Object.keys(person));

for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

let arrayOfPersons = [
  {
    firstName: "Jill",
    lastName: "Mill",
    birthDate: "Jan 6, 1965",
    gender: "female",
  },
  {
    firstName: "Becky",
    lastName: "Brown",
    birthDate: "March 18, 1955",
    gender: "female",
  },
  {
    firstName: "Jimmy",
    lastName: "Goldstein",
    birthDate: "April 22, 1975",
    gender: "male",
  },
  {
    firstName: "Buck",
    lastName: "Jones",
    birthDate: "May 25, 1967",
    gender: "male",
  },
];

const logBirthDates = (people) => {
  for (let person of people) {
    if (person.birthDate.slice(0, 4) % 2 !== 0) {
      console.log(person.birthDate);
    }
  }
}
logBirthDates(arrayOfPersons);

arrayOfPersons.map(function (person) {
  console.log(person);
});

arrayOfPersons.filter(function (person) {
  if (person.name.slice(-1) === "e") {
    console.log(person);
  }
});

const findGender = colors.filter((person) => {
  return person.gender = 'male';
  for()
});



