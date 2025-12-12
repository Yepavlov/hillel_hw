"use strict";

/**
 * Searches for an element in an array and returns its index.
 * @param {Array} arr - Array for searching
 * @param {*} searchItem - Searching element
 * @param {number} [fromIndex=0] - Which index to start with
 * @returns {number} Element index or -1
 */
const customIndexOf = (arr, searchItem, fromIndex = 0) => {
  if (fromIndex < 0) {
    fromIndex = 0;
  }
  for (let i = fromIndex; i < arr.length; i++) {
    if (arr[i] === searchItem) {
      return i;
    }
  }
  return -1;
};

const numbers1 = [1, 3, 5, 6, 2, 5, 2, 7];

const find1 = customIndexOf(numbers1, 2);
const find2 = customIndexOf(numbers1, 2, 5);

console.log(find1);
console.log(find2);
