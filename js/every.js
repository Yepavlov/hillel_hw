"use strict";

/**
 * Tests whether all elements in the array pass the test implemented by the provided function.
 * It returns a Boolean value.
 * @template T
 * @param {T[]} arr - The array to check.
 * @param {(item: T, index: number, array: T[]) => boolean} callback -
 * A function to test for each element.
 * @returns {boolean} True if the callback function returns a truthy value for every array element.
 * Otherwise, false.
 */
const customEvery = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};

const numbers3 = [2, 4, 6, 8, 10];

const allEven = customEvery(numbers3, (num) => num % 2 === 0);
console.log("Example 1 (All even?):", allEven);

const mixedNumbers = [2, 4, 150, 8];

const allSmall = customEvery(mixedNumbers, (num) => num < 100);
console.log("Example 2 (All < 100?):", allSmall);
