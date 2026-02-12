import {isValidEmail, isValidName} from "../utils/validators.js";

export function createProfileModel() {
    let _firstName = "";
    let _lastName = "";
    let _email = "";
    const profileModel = {};

    Object.defineProperties(profileModel, {
        firstName: {
            get() {
                return _firstName
            },
            set(value) {
                if (!isValidName(value)) {
                    throw new Error("First name must be at least 2 characters");
                }
                _firstName = value.trim();
            },
            enumerable: true,
            configurable: false,
        },
        lastName: {
            get() {
                return _lastName
            },
            set(value) {
                if (!isValidName(value)) {
                    throw new Error("Last name must be at least 2 characters");
                }
                _lastName = value.trim();
            },
            enumerable: true,
            configurable: false,
        },
        email: {
            get() {
                return _email
            },
            set(value) {
                if (!isValidEmail(value)) {
                    throw new Error('Email must be valid (contain "@" and ".").');
                }
                _email = value;
            },
            enumerable: true,
            configurable: false,
        },
        fullName: {
            get() {
                return `${_firstName} ${_lastName}`
            },
            enumerable: true,
            configurable: false,
        }
    });

    return profileModel;
}