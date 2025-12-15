"use strict";

let myArray = [1, 2, 3, 4, 5];

function customShift(array) {
    if (array.length === 0) {
        return undefined
    }
    let removedElement = array[0];
    for (let i = 0; i < array.length - 1; i++) {
        array[i] = array[i + 1];
    }
    array.length = array.length - 1;

    return removedElement;
}

console.log(customShift(myArray));
console.log(myArray)