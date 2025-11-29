"use strict";

const email = "user_email@test.com";
const password = "UserPassword1234!";
const isEmailVerified = true;


let canLogin = !!(email.trim() && password.trim() && isEmailVerified);

if (canLogin) {
    console.log("Login successful!");
} else {
    console.log("Check the entered data!");
}