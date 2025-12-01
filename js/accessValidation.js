"use strict";

const userObject = {
    name: 'John',
    age: 25,
    email: "some_email@test.com",
    isSubscribed: true,
    balance: "150.25",
    verified: "1"
}

const userBalance = parseFloat(userObject.balance);
const verifiedBool = !!+userObject.verified;
const hasAccess = userObject.age >= 18 && verifiedBool && (userBalance > 0 || userObject.isSubscribed);
const userAgeString = String(userObject.age);
const ageLooseEqual = userObject.age == userAgeString;
const ageStrictEqual = userObject.age === userAgeString;

console.log("--- User Info ---");
console.log("Loose comparison between age", ageLooseEqual);
console.log("Strict comparison between age", ageStrictEqual);
console.log("User has an access =", hasAccess);

const restrictionReason = userObject.age < 18 ? "Access restricted due to age" : null;


const order = {
    total: "950",
    currency: "USD",
    isPaid: false,
    delivery: "yes",
    priority: "1"
}
const numberTotalOrder = parseFloat(order.total);
const deliveryOrderBool = (order.delivery.toLowerCase() === "yes");
const priorityOrderBool = !!+order.priority;
const isBigOrder = numberTotalOrder >= 1000;

let orderDescription = "";

if (!order.isPaid) {
    orderDescription = "Order is not paid"
} else {
    if (isBigOrder) {
        orderDescription = "High-value paid order";
    } else if (deliveryOrderBool) {
        orderDescription = "Paid order with delivery";
    } else {
        orderDescription = "Paid order without delivery";
    }
}

if (priorityOrderBool) {
    orderDescription += " [PRIORITY]";
}
console.log("\n--- Order Info ---");
console.log(orderDescription);

const isLooseEqual = order.total == numberTotalOrder;
const isStrictEqual = order.total === numberTotalOrder;


const systemSetting = {
    darkMode: true,
    fontSize: "18",
    language: "en",
    betaAccess: "true",
}
const numberFontSize = parseFloat(systemSetting.fontSize);
const betaAccessBool = (systemSetting.betaAccess.toLowerCase() === "true");
const isLargeFont = numberFontSize >= 18;

let settingsDescription = "";

if (systemSetting.darkMode && isLargeFont) {
    settingsDescription = "Dark mode + large font";
} else if (systemSetting.darkMode) {
    settingsDescription = "Dark mode";
} else if (isLargeFont) {
    settingsDescription = "Large font";
} else {
    settingsDescription = "Default settings";
}

if (betaAccessBool) {
    settingsDescription += " (Beta tester)";
}

console.log("\n--- System Info ---");
console.log(settingsDescription);


console.log("\n--- Final Access Check ---");

const isUserValid = hasAccess;
const isOrderValid = order.isPaid || (userBalance >= numberTotalOrder);
const isSystemValid = numberFontSize > 12 && (systemSetting.language === "en" || systemSetting.language === "uk");

let finalAccess = isUserValid && isOrderValid && isSystemValid;

if (finalAccess) {
    console.log("Full access granted");
} else {
    console.log("Access denied");
    if (!isUserValid) console.log("Reason: User requirements not met");
    if (!isOrderValid) console.log("Reason: Order payment issue");
    if (!isSystemValid) console.log("Reason: System settings invalid");
}