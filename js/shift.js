"use strict";

/**
 * Removes the first element from an array and returns that removed element.
 * This method modifies the array in place and changes its length.
 *
 * @template T
 * @param {T[]} array - The array to remove the element from.
 * @returns {T | undefined} The removed element, or undefined if the array is empty.
 */
function customShift(array) {
  if (array.length === 0) {
    return undefined;
  }
  let removedElement = array[0];
  for (let i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array.length = array.length - 1;

  return removedElement;
}

let myArray = [1, 2, 3, 4, 5];

console.log(`The first element is: ${customShift(myArray)}`);
console.log(`New array is: ${myArray}`);
