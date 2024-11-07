"use strict";
const sumArray = (array) => {
    return array.reduce((acc, current) => acc + current, 0);
};
console.log(sumArray([1, 2, 3, 4, 5]));
