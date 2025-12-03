"use strict";


for (let i = 20; i <= 30; i += 0.5) {
    console.log(i);
}

for (let amount = 10; amount <= 100; amount += 10) {
    console.log(`${amount} USD = ${amount * 27} UAH`);
}

const limit = 100;
for (let number = 1; number <= 100; number++) {
    if (number * number <= limit) {
        console.log(number);
    } else {
        break;
    }
}

const b = 937;
let result = 0
for (let c = b; c >= 1; c -= 1) {
    if (b % c === 0) {
        result += 1;
    }
}
console.log(result === 2 ? "A prime number" : "Not a prime number")


let n = 3;

if (n <= 0) {
    console.log("False");
} else {
    while (n % 3 === 0) {
        n /= 3;
    }
    console.log(n === 1 ? "True" : "False");
}