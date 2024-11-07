"use strict";
const removeDuplicates = (array) => {
    const filteredNum = [];
    array.map((num) => {
        if (!filteredNum.includes(num)) {
            filteredNum.push(num);
        }
    });
    return filteredNum;
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
