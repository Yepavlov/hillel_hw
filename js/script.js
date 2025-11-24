"use strict";

const initialPriceString = prompt("Please enter an initial price: ");

let initialPrice = null;
if (initialPriceString !== null && initialPriceString.trim() !== "") {
    const numberValue = Number(initialPriceString);
    if (!isNaN(numberValue)) {
        initialPrice = numberValue;
    }
}

let isPriceValid = false;
if (initialPrice === null) {
    alert("The price should be a number.")
} else if (initialPrice < 0) {
    alert("The price should be a positive number");
} else {
    isPriceValid = true;
}

const discountPercentString = prompt("Please enter a discount: ");

let discount = null;
if (discountPercentString !== null && discountPercentString.trim() !== "") {
    const numberValue = Number(discountPercentString);
    if (!isNaN(numberValue)) {
        discount = numberValue;
    }
}

let isDiscountValid = false;
if (discount === null) {
    alert("The discount should be a number.");
} else if (discount < 0 || discount > 100) {
    alert("The discount must be a number between 0 and 100.");
} else {
    isDiscountValid = true;
}


if (isPriceValid && isDiscountValid) {
    const finalPrice = initialPrice - (initialPrice * discount) / 100;
    alert(`Original price: ${initialPrice} UAH, discount: ${discount}%. Discounted price: ${finalPrice} UAH.`)
}
