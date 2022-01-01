'use strict';

/**
** Testing 'strict mode'
**/
// const interface = 'Audio';
// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive');

/**************************************************************
** Functions
**************************************************************/
// // 1. Basic function
// function logger() {
//       console.log('My name is.. my name is.. my name is..');
// }
// // Calling / Running / Invoking Function
// logger();

// // 2. Function with parametres
// function fruitProcessor(apples, oranges) {
//       // console.log(apples, oranges);
//       const juice = `Juice with ${apples} apples and ${oranges} oranges!`;
//       return juice;
// }
// const appleOrangeJuice = fruitProcessor(11, 22);
// console.log(appleOrangeJuice);
// const appleJuice = fruitProcessor(11, 0);
// console.log(appleJuice);

/**************************************************************
**  Normal fn. (fn. declaration) vs Anonymous fn. (fn. expression)
**************************************************************/
// // a) fn. declaration
// function calcAge1(birthYear) {
//       return 2021 - birthYear;
// }
// const age1 = calcAge1(1992);

// // b) fn. expression
// const calcAge2 = function (birthYear) {
//       return 2021 - birthYear
// }
// const age2 = calcAge2(1992);

// console.log(age1, age2);

/**************************************************************
**  Arrow functions
**************************************************************/
// // a) Single Parameter
// const calcAge3 = birthYear => 2021 - birthYear;
// const age3 = calcAge3(1992)
// console.log(age3);

// // b) Multi Parameter
// const yearsUntilRetirement = (birthYear, firstName) => {
//       const age = 2050 - birthYear;
//       const retirementAge = 65 - age;
//       return `${firstName} retires in ${retirementAge} years!`;
// }
// console.log(yearsUntilRetirement(1992, 'Bob'));

/**************************************************************
**  Functions Calling Other Functions
**************************************************************/
// function cutFruitPieces(fruit) {
//       return fruit * 4;
// }
// function processFruit(apples, oranges) {
//       const applePieces = cutFruitPieces(apples);
//       const orangePieces = cutFruitPieces(oranges);

//       const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces!`;

//       return juice;
// }
// console.log(processFruit(11, 22));

/**************************************************************
** Coding Challenge
**************************************************************/
// const calcAverage = (score1, score2, score3) => (score1, score2, score3) / 3;
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// const checkWinner = function (avgDolphins, avgKoalas) {
//       if (avgDolphins >= 2 * avgKoalas) {
//             console.log(`Dolphins win! ${avgDolphins} vs. ${avgKoalas}`);
//       } else if (avgKoalas >= 2 * avgDolphins) {
//             console.log(`Koalas win! ${avgKoalas} vs. ${avgDolphins}`);
//       } else {
//             console.log('No team wins');
//       }
// }
// checkWinner(scoreDolphins, scoreKoalas);

/**************************************************************
** Arrays
**************************************************************/
// const persons = ['p1', 'p2', 'p3'];
// console.log(persons);
// console.log(persons[2]);
// persons[2] = 'p4';
// console.log(persons);
// console.log(persons[2]);

// const years = new Array(1991, 1992, 1993, 1994);
// console.log(years);
// console.log(years.length);
// console.log(years[years.length - 1]);

// // Exercise ( Array map() )
// const calcAge = function (birthYear) {
//       return 2022 - birthYear;
// }
// const birthYears = [1991, 1992, 1993, 1994, 1995, 1996];
// const output = birthYears.map(calcAge);
// console.log(output);

/**************************************************************
** Array Methods
**************************************************************/
// const persons = ['p1', 'p2', 'p3'];

// const newLenght = persons.push('p4');
// console.log(persons);
// console.log(newLenght);

// persons.unshift('p5');
// console.log(persons);

// const popped = persons.pop();
// console.log(persons);
// console.log(popped);

// persons.shift('p5');
// console.log(persons);

// console.log(persons.indexOf('p2'));

// console.log(persons.includes('p5'));
// console.log(persons.includes('p3'));

/**************************************************************
** Coding Challenge
**************************************************************/
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

/**************************************************************
** Objects
**************************************************************/
// const personDetails = {
//       firstName: 'John',
//       lastName: 'Doe',
//       age: 2022-1992,
//       job: 'Developer',
//       friends: ['Jane', 'Jospeh', 'Jade']
// };
// console.log(personDetails);

// console.log(personDetails.lastName);
// console.log(personDetails['lastName']);

// const nameKey = 'Name';
// console.log(personDetails['first' + nameKey]);
// console.log(personDetails['last' + nameKey]);

// const interestedIn = prompt('What do you want to know?');
// if (personDetails[interestedIn]) {
//       console.log(personDetails[interestedIn]);
// } else {
//       console.log('Wrong request!');
// }
// personDetails.location = 'Earth';
// personDetails['socialMedia'] = 'Yes';
// console.log(personDetails);
// console.log(personDetails.friends.length);

// console.log(`${personDetails.firstName} has ${personDetails.friends.length} friends, and his best friends is ${personDetails.friends[0]}`);

/**************************************************************
** Object Methods
**************************************************************/
// const personDetails = {
//       firstName: 'John',
//       lastName: 'Doe',
//       birthYear: 1992,
//       job: 'Developer',
//       friends: ['Jane', 'Jospeh', 'Jade'],
//       hasDriversLicense: false,
//       // calcAge: function (birthYear) {
//       //       return 2022 - birthYear
//       // }
//       // calcAge: function () {
//       //       console.log(this);
//       //       return 2022 - this.birthYear
//       // }
//       calcAge: function () {
//             this.age = 2022 - this.birthYear;
//             return this.age;
//       },
//       getSummary: function () {
//             return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he ${this.hasDriversLicense ? 'have a DL' : 'does not have a DL'}.`;
//       }
// };
// console.log(personDetails.calcAge());
// console.log(personDetails);
// console.log(personDetails.age);
// // console.log(personDetails.calcAge(personDetails.birthYear));
// // console.log(personDetails['calcAge'](personDetails.birthYear));

// console.log(personDetails.getSummary());
