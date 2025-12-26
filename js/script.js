"use strict";

const arr2 = [0, 1, [2, null, [3, undefined, [4, 5]]]];
const arr1 = [1, 2, null, "", undefined, 5];

function myFlat(...restArgs) {
  if (restArgs.length > 1) {
    throw new Error(
      "Function accepts only 1 argument, too much arguments provided",
    );
  }
  const arrayToFlatten = restArgs[0];
  if (!Array.isArray(arrayToFlatten)) {
    throw new Error("Function accepts only one argument - Array");
  }
  let result = [];
  for (const item of arrayToFlatten) {
    if (Array.isArray(item)) {
      const flatItem = myFlat(item);
      result.push(...flatItem);
    } else {
      result.push(item);
    }
  }
  return result;
}

const newArray = myFlat(arr2);
console.log(newArray);

const newArray1 = myFlat(arr1);
console.log(newArray1);
