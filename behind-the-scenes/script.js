'use strict';

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted');
}

// Arguments Keywords
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 11);

var addArrow = (a, b) => {
    console.log(arguments);

    return a + b;
};

addExpr(2, 5, 8);


// Primitives vs Objects
let age = 22;
let oldAge = age;
age = 33;

console.log(age);
console.log(oldAge);

// Reference Types
const me = {
    name: 'John',
    age: 44
};

const friend = me;
friend.age = 55;

console.log(friend);
console.log(me);

// Copying Objects
const john = {
    firstName: 'John',
    lastName: 'Doe',
    age: 22,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
};

const johnCopy = Object.assign({}, john);
johnCopy.age = 33;
johnCopy.family.push('Mary');

console.log(john);
console.log(johnCopy);
