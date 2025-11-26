"use strict";


const price1 = "120.50$";
const price2 = "UAH 999";
const height = "180cm";
const broken = "abc123";

console.log("-------- The result of parsing --------");

// 1. price1: "120.50$"
// parseInt зупиняється на крапці (бо для цілих чисел крапка — це не число) -> 120
// parseFloat зчитує крапку і цифри після неї, зупиняється на знаку "$". -> 120.5
console.log(`${price1} -> parseInt: ${parseInt(price1)}, parseFloat: ${parseFloat(price1)}`);

// 2. price2: "UAH 999"
// Обидві функції дивляться на перший символ "U".
// Це не цифра, тому вони миттєво здаються і повертають -> NaN.
console.log(`${price2} -> parseInt: ${parseInt(price2)}, parseFloat: ${parseFloat(price2)}`);


// 3. height: "180cm"
// Обидві функції успішно зчитують "180".
// Далі бачать літеру "c", розуміють, що число закінчилося, і відкидають "cm". -> 180
console.log(`"${height}" -> parseInt: ${parseInt(height)}, parseFloat: ${parseFloat(height)}`);


// 4. broken: "abc123"
// Аналогічно до price2. Перший символ "a" — це не число.
// Не число конвертуємо в number -> NaN.
console.log(`"${broken}" -> parseInt: ${parseInt(broken)}, parseFloat: ${parseFloat(broken)}`);
