"use strict";


let a = 10;
let b = 3;
let num = 5;


console.log(a === 0 ? "True" : "False");

console.log(a > 0 ? "True" : "False");

console.log(a < 0 ? "True" : "False");

console.log(a >= 0 ? "True" : "False");

console.log(a <= 0 ? "True" : "False");

console.log(a !== 0 ? "True" : "False");

console.log(a === "test" ? "True" : "False");

console.log(a === "1" ? "True" : "False");

console.log(a > 0 && a < 5 ? "True" : "False");

console.log(a === 0 || a === 2 ? a + 7 : a / 10)

console.log(a <= 1 && b >= 3 ? a + b : a - b);

console.log((a > 2 && a < 11) || (b >= 6 && b < 14) ? "True" : "False");


let result;
switch (num) {
    case 1:
        result = "winter";
        break;
    case 2:
        result = "spring";
        break;
    case 3:
        result = "summer";
        break;
    case 4:
        result = "fall";
        break;
    default:
        result = "unknown value";
}
console.log(result);