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
const calcAverage = (score1, score2, score3) => (score1, score2, score3) / 3;
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
const checkWinner = function (avgDolphins, avgKoalas) {
      if (avgDolphins >= 2 * avgKoalas) {
            console.log(`Dolphins win! ${avgDolphins} vs. ${avgKoalas}`);
      } else if (avgKoalas >= 2 * avgDolphins) {
            console.log(`Koalas win! ${avgKoalas} vs. ${avgDolphins}`);
      } else {
            console.log('No team wins');
      }
}
checkWinner(scoreDolphins, scoreKoalas);

/**************************************************************
** Arrays
**************************************************************/
const persons = ['p1', 'p2', 'p3'];
console.log(persons);
console.log(persons[0]);

const years = new Array(1991, 1992, 1993, 1994);
console.log(years);
