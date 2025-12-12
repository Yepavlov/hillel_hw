"use strict";

/**
 * Determines whether an array includes a certain value among its entries,
 * returning true or false as appropriate.
 * @template T
 * @param {T[]} arr - The array to search in.
 * @param {T} searchElement - The element to search for.
 * @param {number} [fromIndex=0] - The position in this array at which to begin searching for searchElement.
 * @returns {boolean} True if the searchElement is found within the array, false otherwise.
 */
const customIncludes = (arr, searchElement, fromIndex = 0) => {
  const len = arr.length;
  let k = fromIndex >= 0 ? fromIndex : len + fromIndex;
  if (k < 0) {
    k = 0;
  }
  for (let i = k; i < len; i++) {
    if (arr[i] === searchElement) {
      return true;
    }
  }

  return false;
};

const fruits = ["apple", "banana", "mango", "orange"];

const hasBanana = customIncludes(fruits, "banana");
console.log("Example 1 (Includes banana?):", hasBanana);

const hasGrapes = customIncludes(fruits, "grapes");
console.log("Example 2 (Includes grapes?):", hasGrapes);
