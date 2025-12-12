"use strict";

/**
 * Returns the value of the first element in the array where predicate is true, and undefined
 * otherwise.
 *
 * @template T
 * @param {T[]} arr - The array to search in.
 * @param {(item: T, index: number, array: T[]) => boolean} callback -
 * Function to execute on each value in the array.
 * Should return true to indicate the element is found.
 * @returns {T | undefined} The value of the first element that satisfies the testing function.
 * Otherwise, undefined is returned.
 */
const customFind = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
};

const users = [
  { id: 1, name: "Alice", active: false },
  { id: 2, name: "Bob", active: true },
  { id: 3, name: "Charlie", active: true },
];

const user = customFind(users, (item) => item.id === 2);
console.log("Example 1 (Found User):", user);

const firstActive = customFind(users, (item) => item.active === true);
console.log("Example 2 (First Active):", firstActive);
