"use strict";


const userName = prompt("Enter your name: ", "Unknown user");

const isConfirmed = confirm(`${userName} would you like to see a welcome message?`);

if (isConfirmed) {
    alert(`Hello ${userName}, nice to see you!`);
}