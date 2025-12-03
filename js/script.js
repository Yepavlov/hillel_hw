"use strict";

const arr = [1, 2, 3, 4, 5];


let result = 0;

for (const number of arr) {
    result += number
}
console.log(result);

let result2 = 0;
for (const number of arr) {
    result2 += (number ** 2);
}
console.log(result2);