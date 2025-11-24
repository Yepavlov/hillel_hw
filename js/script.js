"use strict";


function convertToNumber(value) {
    if (value === null || value.trim() === "") {
        return null;
    }
    const numberValue = Number(value);
    if (isNaN(numberValue)) {
        return null;
    }
    return numberValue;
}

function validateAge(value) {
    if (value === null) {
        alert("Age not specified or invalid number");
        return null;
    }
    if (value > 0 && value <= 150) {
        return value;
    }
    alert("Age must be between 1 and 150 years!");
    return null;
}

function checkUserAge(age) {
    if (!age) {
        return;
    }
    if (age >= 18) {
        alert("Access granted. Enjoy watching!")
    } else {
        const hasPermission = confirm("You are under 18. Is there an adult with you who allows viewing?");
        if (hasPermission) {
            alert("Access is permitted with adult permission.")
        } else {
            alert("Access denied.")
        }
    }
}

const initialUserAge = prompt("Enter your age: ");

const userAgeNumber = convertToNumber(initialUserAge);

const validatedUserAge = validateAge(userAgeNumber);

checkUserAge(validatedUserAge);
