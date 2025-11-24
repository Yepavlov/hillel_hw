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

function validateString(name) {
    if (name === null || name.trim() === "") {
        return null;
    }
    return name.trim();
}

function convertStringToBoolean(value) {
    if (typeof value !== "string" || value.trim() === "") {
        return null;
    }
    const validatedValue = value.trim().toLowerCase();
    const allowedValues = ["yes", "no"];
    if (!allowedValues.includes(validatedValue)) {
        return null;
    }
    return validatedValue === "yes";
}

function showMessage(userName, userAge, userCity, loveToJS) {
    let invalidFields = [];
    if (!userName) {
        invalidFields.push("Name")
    }
    if (userAge === null) {
        invalidFields.push("Age")
    }
    if (!userCity) {
        invalidFields.push("City")
    }
    if (loveToJS === null) {
        invalidFields.push("Answer about JavaScript (Yes/No)");
    }
    if (invalidFields.length > 0) {
        alert(`Please fix the following fields: ${invalidFields.join(", ")}`);
        return;
    }
    if (loveToJS) {
        alert(`Hello ${userName}! You are ${userAge} years old, you are from ${userCity} city. Attitude toward JavaScript: likes it.`);
    } else {
        alert(`Hello ${userName}! You are ${userAge} years old, you are from ${userCity} city. Attitude toward JavaScript: dislikes it.`);
    }

}


const userNameInitial = prompt("Enter your name: ");
const userName = validateString(userNameInitial);

const userAgeInitial = prompt("Enter your age: ");
const userAge = convertToNumber(userAgeInitial);

const userCityInitial = prompt("Enter the city where you live: ");
const userCity = validateString(userCityInitial);

const loveToJS = prompt("Do you like Javascript? \n Please, enter only 'Yes' or 'No' ");
const isLove = convertStringToBoolean(loveToJS);

showMessage(userName, userAge, userCity, isLove);