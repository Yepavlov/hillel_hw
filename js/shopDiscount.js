"use strict";


const hasPromoCode = false;
const cartTotal = 100;
const isBlackFriday = true;

function showMessage(isDiscountApplied) {
    if (isDiscountApplied) {
        console.log("Discount applied");
        return;
    }
    console.log("Discount did not apply");
}

// requirements have several meanings, so they can also be understood in this way (cartTotal >= 100 && hasPromoCode) || isBlackFriday
let isDiscountApplied = (cartTotal >= 100 && hasPromoCode) || isBlackFriday;
showMessage(isDiscountApplied);

const noDiscount = !isDiscountApplied;
console.log(noDiscount);