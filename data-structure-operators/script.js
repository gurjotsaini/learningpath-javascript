'use strict';
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const weekdays = [
//     'm', 't', 'w', 't', 'f', 's', 's'
// ];

// const openingHours2 = {
//     [weekdays[1]]: {
//       open: 12,
//       close: 22,
//     },
// };

const openingHours = {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 Enhanced Object Literals
  openingHours,

  order (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery ({starterIndex, mainIndex, time, address}) {
      console.log(
          `Order Received! ${this.starterMenu[starterIndex]}
          and ${this.mainMenu[mainIndex]}
          will be delivered to ${address} at ${time}`
        );
  },

  orderPasta (ing, ing2, ing3) {
        console.log(`Here is your Pasta with ${ing}, ${ing2} and ${ing3}`);
  },

  orderPizza (mainIngredient, ...otherIngredients) {
      console.log(`Here is your Pizza with ${mainIngredient} and ${otherIngredients}`);
  },
};

/**************************************************************
**  Array Destructuring
**************************************************************/
// const arr = [2,3,4,];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x,y,z] = arr;
// console.log(x,y,z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching Variables Method 1
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// // Switching Variables Method 2
// [main, secondary] = [secondary, main]
// console.log(main, secondary);
// console.log(restaurant.order(2, 0));

// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested Descructuring
// const nested = [2, 4, [5,6]];
// const [m, , n] = nested;
// console.log(m, n);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// // const [p, q, r] = [8, 9];
// const [p=1, q=1, r=1] = [8, 9];
// console.log(p, q, r);

/**************************************************************
**  Object Destructuring
**************************************************************/
// const {name, categories, openingHours} = restaurant;
// console.log(name, openingHours, categories);

// const {
//     name: restaurantName,
//     openingHours: restaurantOpeningHours,
//     categories: restaurantCategories
// } = restaurant;

// console.log(restaurantName, restaurantOpeningHours, restaurantCategories);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let d = 121;
// let e = 242;
// const obj = { d: 22, e: 44, f: 66 };
// ({d, e} = obj);
// console.log(d, e);

// // Nested Objects
// const { fri: {open: o, close: c} } = openingHours;
// console.log(o, c);

// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'Via Angelo Tavanti 23, Firenze, Italy',
//     mainIndex: 1,
//     starterIndex: 2,
// });

/**************************************************************
**  Spread Operator
**************************************************************/
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays or more
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu ];
// console.log(menu);

// // Iterables are arrays, strings, maps, sets, and typed arrays, but NOT OBJECTS
// const str = 'John';
// const lettrs = [...str, ' ', 'D.'];
// console.log(lettrs);
// console.log(...str);

// // Real World Example
// // const ingredients = [
// //     prompt('Let\'s start with the first ingredient'),
// //     prompt('Now the second'),
// //     prompt('Finally the third')
// // ];
// // console.log(ingredients);
// // restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = {...restaurant, founder: 'John Doe', foundedIn: '2018'};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Classico Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

/**************************************************************
**  Rest Pattern and Parameters
**
** Coollects remaining parameters and add it to an array
**************************************************************/
// // 1. Destructuring

// // SPREAD, because on RIGHT side of =
// const arr = [1, 2, , ...[3, 4]];

// // REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// // In Array
// const [pizza, , risotto, ...otherFood] = [
//     ...restaurant.mainMenu,
//     ...restaurant.starterMenu
// ];
// console.log(pizza, risotto, otherFood);

// // In Object
// const {sat: saturday, ...weekDays} = restaurant.openingHours;
// console.log(saturday);

// // 2. Functions

// const add = function (...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     console.log(sum);;
// };

// add(2,3);
// add(5,6,7,8,9);

// const x = [1, 2, 3, 4, 5];
// add(...x);

// restaurant.orderPizza('Mushrooms', 'Pepperoni', 'Olives');

/**************************************************************
**  Short Circuiting (&& and ||)
**
** 3 properties of any booleans:
** 1. Use any data type
** 2. Return any data type
** 3. Short circuiting
**
** OR operator (||) will return the first truthy value of
** the operands or the last value if all operands are falsy
**
** AND operator (&&) will return the first falsy value
** of the operands or the last value if all operands
** are truthy
**************************************************************/
// // OR Operator
// console.log('---- OR ----');

// console.log(3 || 'John'); // OP: 3
// console.log('' || 'John'); // OP: John
// console.log(true || 0); // OP: true
// console.log(undefined || null); // OP: null

// // Output: John because it is the first condition that is true
// console.log(undefined || 0 || '' || 'John' || 22 || null || true); // OP: John

// // restaurant.numberOfGuests = 22;
// const guests1 = restaurant.numberOfGuests ? restaurant.numberOfGuests : 11;
// console.log(guests1); // OP: 11

// const guests2 = restaurant.numberOfGuests || 11;
// console.log(guests2); // OP: 11

// // AND Operator
// console.log('---- AND ----');

// console.log(0 && 'John'); // OP: 0
// console.log(3 && 'John'); // OP: John
// console.log('' && 'John'); // OP: ''
// console.log(true && 0); // OP: 0
// console.log(undefined && null); // OP: undefined

// console.log('Hello' && 22 && null && 'John'); // OP: null

// // Practical example
// if (restaurant.orderPizza) {
//     restaurant.orderPizza('Mushrooms', 'Pepperoni', 'Olives');
// }

// restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Pepperoni', 'Olives');

/**************************************************************
**  The Nullish Coalescing Operator (?)
**
** Nullish values are null, undefined, NaN, and empty strings
** (NOT 0 or '')
**************************************************************/
// restaurant.numberOfGuests = 0;
// console.log(restaurant.numberOfGuests); // OP: 0
// const guests = restaurant.numberOfGuests || 11;
// console.log(guests); // OP: 11

// const guestCorrect = restaurant.numberofGuests ?? 10;
// console.log(guestCorrect); // OP: 10

/**************************************************************
** Logical Assignment Operators
**************************************************************/
// const rest1 = {
//     name: 'Capri',
//     // numGuests: 22,
//     numGuests: 0
// };

// const rest2 = {
//     name: 'La Piaza',
//     owner: 'Rossi',
//     // numGuests: 22
// };

// // OR Assignment Operator
// // rest1.numGuests = rest1.numGuests || 11;
// // rest2.numGuests = rest2.numGuests || 11;

// // rest1.numGuests ||= 11;
// // rest2.numGuests ||= 11;

// // Nullish Assignment Operator (Null or Undefined)
// rest1.numGuests ??= 11;
// rest2.numGuests ??= 11;

// // AND Assignment Operator
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

/**************************************************************
** Coding Challenge #1
** We're building a football betting app (soccer for my American friends 😅)!
** Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
** 1. Create one player array for each team (variables 'players1' and 'players2')
** 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
** 3. Create an array 'allPlayers' containing all players of both teams (22 players)
** 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
** 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
** 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
** 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
** TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
**************************************************************/
// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//       [
//         'Neuer',
//         'Pavard',
//         'Martinez',
//         'Alaba',
//         'Davies',
//         'Kimmich',
//         'Goretzka',
//         'Coman',
//         'Muller',
//         'Gnarby',
//         'Lewandowski',
//       ],
//       [
//         'Burki',
//         'Schulz',
//         'Hummels',
//         'Akanji',
//         'Hakimi',
//         'Weigl',
//         'Witsel',
//         'Hazard',
//         'Brandt',
//         'Sancho',
//         'Gotze',
//       ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//       team1: 1.33,
//       x: 3.25,
//       team2: 6.5,
//     },
//   };

// // 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// // 5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6.
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// // 7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

/**************************************************************
**  For Loop
**************************************************************/
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu.entries()) {
//     console.log(`${item[0]}: ${item[1]}`);
// }

// console.log('\n');

// for (const [index, element] of menu.entries()) {
//     console.log(`${index+1}: ${element}`);
// }

/**************************************************************
**  Optional Chaining
**************************************************************/
// const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// for (const day of days) {
//     const open = restaurant.openingHours[day]?.open ?? 'closed';
//     console.log(`On ${day}, we open at ${open}`);
//   }

/**************************************************************
** Strings
**************************************************************/
const airline = 'Lufthansa';
const plane = 'A380';

console.log(plane[0]);
console.log('Boeing'[0]);

console.log(airline.length);
console.log(plane.length);

console.log(airline.indexOf('a'));
console.log(plane.lastIndexOf('A'));

console.log(airline.slice(3));
console.log(airline.slice(-3));
console.log(airline.slice(0, 3));

console.log(airline.slice(0, airline.indexOf('a')));
console.log(airline.slice(0, airline.lastIndexOf('a')));

const checkMiddleSeat = function(seat) {
    // B & E are middle seats
    const s = seat.slice(-1);

    if (s=== 'B' || s === 'E') {
        console.log('You got middle seat');
    } else {
        console.log('You didn\'t get middle seat');
    }

};

checkMiddleSeat('11B');
checkMiddleSeat('33C');
checkMiddleSeat('22E');
