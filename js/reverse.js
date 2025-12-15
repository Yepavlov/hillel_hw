"use strict";

/**
 * Reverses an array in place. The first array element becomes the last,
 * and the last array element becomes the first.
 *
 * @param {Array} array - The array to reverse.
 * @returns {Array} The reference to the original (modified) array.
 */
function customReverse(array) {
  const halfLength = Math.floor(array.length / 2);

  for (let i = 0; i < halfLength; i++) {
    const mirrorIndex = array.length - 1 - i;
    const temp = array[i];
    array[i] = array[mirrorIndex];
    array[mirrorIndex] = temp;
  }
  return array;
}

let myArray1 = [1, 2, 3, 4, 5];
console.log("Original:", myArray1);
console.log("Reversed:", customReverse(myArray1));

let myArray2 = ["A", "B", "C", "D"];
console.log("Original:", myArray2);
console.log("Reversed Even:", customReverse(myArray2));
