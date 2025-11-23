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

function validateOriginalPrice(price) {
    if (price === null) {
        alert("The price should be a number.");
        return false
    }
    if (price < 0) {
        alert("The price should be a positive number");
        return false
    }
    return true;
}

function validateDiscount(discount) {
    if (discount === null) {
        alert("The discount should be a number.");
        return false
    }
    if (discount < 0 || discount > 100) {
        alert("The discount must be a number between 0 and 100.");
        return false
    }
    return true;
}

function calculateDiscount(price, discount) {
    return price - (price * discount) / 100;
}

const initialPriceString = prompt("Please enter an initial price: ");
const initialPrice = convertToNumber(initialPriceString);

const discountPercentString = prompt("Please enter a discount: ");
const discount = convertToNumber(discountPercentString);

if (validateOriginalPrice(initialPrice) && validateDiscount(discount)) {
    const finalPrice = calculateDiscount(initialPrice, discount);
    alert(`Original price: ${initialPrice} UAH, discount: ${discount}%. Discounted price: ${finalPrice} UAH.`)
}
