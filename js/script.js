"use strict";

function isValidWord(word) {
    return word && word.trim().length >= 2;
}


const user = {
    _firstName: "",
    _lastName: "",
    createdAt: new Date(),

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    },

    set fullName(value) {
        if (typeof value !== "string") {
            throw new Error("Full name must be a string");
        }
        const parts = value.trim().split(" ");

        if (parts.length !== 2) {
            throw new Error("Full name must consist of exactly two words");
        }
        const [first, last] = parts;
        if (!isValidWord(first) || !isValidWord(last)) {
            throw new Error("Each name must be at least 2 characters long");
        }

        this._firstName = first;
        this._lastName = last;
    },

    lockProfile() {
        Object.seal(this);
        console.log("Profile is sealed!");
    },

    lockHard() {
        Object.freeze(this);
        console.log("Profile is frozen!");
    }
}

Object.defineProperties(user, {
    _firstName: {enumerable: false},
    _lastName: {enumerable: false},
    createdAt: {
        writable: false,
        configurable: false
    },
    fullName: {
        enumerable: true,
        configurable: false
    },
    lockProfile: {enumerable: false, configurable: false},
    lockHard: {enumerable: false, configurable: false}
});


console.log("--- 1. Check for fullName ---");
user.fullName = "John Doe"
console.log("Current:", user.fullName); // John Doe
user.fullName = "Alice Smith";
console.log("Updated:", user.fullName); // Alice Smith
try {
    user.fullName = "A"; // Error for short name
} catch (e) {
    console.error("Expected error:", e.message);
}

console.log("\n--- 2. Checking for enumerable (keys) ---");
console.log("Keys:", Object.keys(user)); // Only 'createdAt' and 'fullName'

console.log("\n--- 3. Checking createdAt ---");
try {
    user.createdAt = new Date(2000, 0, 1);
} catch (e) {
    console.error("Cannot change createdAt:", e.message);
}

console.log("\n--- 4. Blocking (lockProfile / Seal) ---");
user.lockProfile();
console.log("Is Sealed?", Object.isSealed(user)); // true

try {
    user.age = 25;
} catch (e) {
    console.error("Cannot add property 'age':", e.message);
}

try {
    delete user.fullName;
} catch (e) {
    console.error("Cannot delete 'fullName':", e.message);
}


console.log("\n--- 5. Different between Seal vs Freeze ---");
user.fullName = "Bob Dylan";
console.log("Sealed object allows update:", user.fullName);

user.lockHard();
console.log("Is Frozen?", Object.isFrozen(user)); // true

try {
    user.fullName = "Iron Man"; //error
} catch (e) {
    console.error("Frozen object CANNOT be updated:", e.message);
}

console.log(Object.getOwnPropertyDescriptors(user));