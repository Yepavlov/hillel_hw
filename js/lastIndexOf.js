"use strict";

/**
 * Returns the last index at which a given element can be found in the array,
 * or -1 if it is not present. The array is searched backwards, starting at fromIndex.
 * @template T
 * @param {T[]} arr - The array to search in.
 * @param {T} searchElement - Element to locate in the array.
 * @param {number} [fromIndex] - The index at which to start searching backwards.
 * Defaults to the array's length minus 1.
 * @returns {number} The last index of the element in the array; -1 if not found.
 */
const customLastIndexOf = (arr, searchElement, fromIndex = arr.length - 1) => {
  let startIndex = fromIndex;
  if (startIndex >= arr.length) {
    startIndex = arr.length - 1;
  }
  if (startIndex < 0) {
    startIndex = -1;
  }
  for (let i = startIndex; i >= 0; i--) {
    if (arr[i] === searchElement) {
      return i;
    }
  }
  return -1;
};

const numbers2 = [2, 5, 9, 2];

const index1 = customLastIndexOf(numbers2, 2);
console.log("Example 1 (Last index of 2):", index1);

const index2 = customLastIndexOf(numbers2, 2, 2);
console.log("Example 2 (Last index of 2 before index 2):", index2);
