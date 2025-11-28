"use strict";

const user = {
    name: "Alex",
    age: 25,
    city: "Kyiv",
    job: "Frontend"
};
const defaultValue = "Undefined";

const {name = defaultValue, age = defaultValue, city = defaultValue, job = defaultValue} = user;

const shortInfo = {
    name,
    city,
};
console.log(shortInfo);


// I used a name 'userLocation' instead of 'location' to avoid error in browser, because 'location' has already been declared
const {name: fullName = defaultValue, city: userLocation = defaultValue} = user;

const renamed = {
    fullName,
    userLocation,
};
console.log(renamed);