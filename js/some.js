"use strict";

/**
 * Tests whether at least one element in the array passes the test implemented by the provided function.
 * It returns true if, in the array, it finds an element for which the provided function returns true;
 * otherwise it returns false. It doesn't modify the array.
 * @template T
 * @param {T[]} arr - The array to check.
 * @param {(item: T, index: number, array: T[]) => boolean} callback -
 * A function to test for each element.
 * @returns {boolean} True if the callback function returns a truthy value for at least one element in the array.
 * Otherwise, false.
 */
const customSome = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};

const numbers5 = [1, 2, 3, 4, 5];

const hasEven = customSome(numbers5, (num) => num % 2 === 0);
console.log("Example 1 (Has even number?):", hasEven);

const hasNegative = customSome(numbers5, (num) => num < 0);
console.log("Example 2 (Has negative number?):", hasNegative);
