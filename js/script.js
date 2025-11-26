"use strict";


function convertToNumber(value) {
    if (value === null || value.trim() === "") {
        return null;
    }
    const numberValue = Number(value);
    if (!isNaN(numberValue)) {
        return numberValue;
    }
    return null;
}

function showMessage(age) {
    if (age === null) {
        alert("Invalid age.");
        return;
    }
    alert(`After 5 years you will be: ${age + 5} years old.`)
}


const userAgeInit = prompt("Enter your age");

const userAge = convertToNumber(userAgeInit);

showMessage(userAge);