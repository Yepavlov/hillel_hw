"use strict";

const myArray = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

/**
 * Finds the maximum number in an array and its index.
 *
 * @param {number[]} array - The array of numbers to search.
 * @returns {{maxNumber: number, maxNumberIndex: number}} An object containing the max value and its index.
 */
function maxNumberWithIndex(array) {
  let maxNumber = -Infinity;
  let maxNumberIndex = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxNumber) {
      maxNumber = array[i];
      maxNumberIndex = i;
    }
  }
  return { maxNumber, maxNumberIndex };
}

/**
 * Finds the minimum number in an array and its index.
 *
 * @param {number[]} array - The array of numbers to search.
 * @returns {{minNumber: number, minNumberIndex: number}} An object containing the min value and its index.
 */
function minNumberWithIndex(array) {
  let minNumber = Infinity;
  let minNumberIndex = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < minNumber) {
      minNumber = array[i];
      minNumberIndex = i;
    }
  }
  return { minNumber, minNumberIndex };
}

/**
 * Counts how many numbers in the array satisfy a specific condition.
 *
 * @param {number[]} array - The array to check.
 * @param {function(number): boolean} callback - A function that returns true if the number should be counted.
 * @returns {number} The count of numbers matching the condition.
 */
function numbersAmount(array, callback) {
  let amount = 0;
  for (const number of array) {
    if (callback(number)) {
      amount += 1;
    }
  }
  return amount;
}

/**
 * Calculates the sum of numbers in the array that satisfy a specific condition.
 *
 * @param {number[]} array - The array to process.
 * @param {function(number): boolean} callback - A function that returns true if the number should be added to the sum.
 * @returns {number} The sum of the matching numbers.
 */
function sumNumbers(array, callback) {
  let result = 0;
  for (const number of array) {
    if (callback(number)) {
      result += number;
    }
  }
  return result;
}

/**
 * Calculates the product (multiplication) of numbers that satisfy a specific condition.
 *
 * @param {number[]} array - The array to process.
 * @param {function(number): boolean} callback - A function that returns true if the number should be multiplied.
 * @returns {number} The product of the matching numbers.
 */
function multiplyNumbers(array, callback) {
  let result = 1;
  for (const number of array) {
    if (callback(number)) {
      result *= number;
    }
  }
  return result;
}

// Task 1: Sum and Count of ALL positive elements
const countAllPositive = numbersAmount(myArray, (n) => n > 0);
const sumAllPositive = sumNumbers(myArray, (n) => n > 0);
console.log(
  `Total Positive Count: ${countAllPositive}, Total Positive Sum: ${sumAllPositive}`,
);

// 2. Min Number
const resultMinNumber = minNumberWithIndex(myArray);
console.log(
  `Min Number: ${resultMinNumber.minNumber}, Index: ${resultMinNumber.minNumberIndex}`,
);

// 3. Max Number
const resultMaxNumber = maxNumberWithIndex(myArray);
console.log(
  `Max Number: ${resultMaxNumber.maxNumber}, Index: ${resultMaxNumber.maxNumberIndex}`,
);

// 4. Negative Elements Count
const negativeNumBersAmount = numbersAmount(myArray, (number) => number < 0);
console.log(`This array has ${negativeNumBersAmount} negative numbers`);

// 5. Positive Odd Count
const positiveOddNumBersAmount = numbersAmount(
  myArray,
  (number) => number > 0 && number % 2 !== 0,
);
console.log(`This array has ${positiveOddNumBersAmount} positive odd numbers`);

// 6. Positive Even Count
const positiveEvenNumBersAmount = numbersAmount(
  myArray,
  (number) => number > 0 && number % 2 === 0,
);
console.log(
  `This array has ${positiveEvenNumBersAmount} positive even numbers`,
);

// 7 & 8. Sums
const sumEvenNumbers = sumNumbers(
  myArray,
  (number) => number > 0 && number % 2 === 0,
);
console.log(`The sum of positive even numbers is ${sumEvenNumbers}`);

const sumOddNumbers = sumNumbers(
  myArray,
  (number) => number > 0 && number % 2 !== 0,
);
console.log(`The sum of positive odd numbers is ${sumOddNumbers}`);

// 9. Product
const multiplyPositiveNumbers = multiplyNumbers(
  myArray,
  (number) => number > 0,
);
console.log(
  `The multiplication of positive numbers is ${multiplyPositiveNumbers}`,
);

// 10
/**
 * Logic: Keep the max number, set everything else to 0.
 * We use the maxNumber we found earlier (resultMaxNumber.maxNumber).
 */
const maxVal = resultMaxNumber.maxNumber;

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] !== maxVal) {
    myArray[i] = 0;
  }
}

console.log(`Array after zeroing out non-max elements: ${myArray}`);
