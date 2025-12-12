"use strict";

/**
 * Returns the index of the first element in the array that satisfies the provided testing function.
 * Otherwise, it returns -1, indicating that no element passed the test.
 *
 * @template T
 * @param {T[]} arr - The array to search in.
 * @param {(item: T, index: number, array: T[]) => boolean} callback -
 * Function to execute on each value in the array.
 * Should return true to indicate the element is found.
 * @returns {number} The index of the first element that passes the test; otherwise, -1.
 */
const customFindIndex = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
};

const numbers4 = [5, 12, 8, 130, 44];

const indexLarge = customFindIndex(numbers4, (element) => element > 13);
console.log("Example 1 (Index of > 13):", indexLarge);

const tasks = [
  { id: 1, done: true },
  { id: 2, done: false },
  { id: 3, done: true },
];

const todoIndex = customFindIndex(tasks, (task) => task.done === false);
console.log("Example 2 (Index of unfinished task):", todoIndex);
