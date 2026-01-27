import {ERROR_MESSAGES, REG_EXPS} from "../constants/validation.js";

export const validateField = (name, value) => {
    if (!REG_EXPS[name]) return {isValid: true, error: null};
    const isValid = REG_EXPS[name].test(value);

    return {
        isValid,
        error: isValid ? null : ERROR_MESSAGES[name],
    };
};

export const validateForm = (formData) => {
    const errors = {};
    let isValid = true;

    Object.entries(formData).forEach(([name, value]) => {
        const result = validateField(name, value);
        if (!result.isValid) {
            errors[name] = result.error;
            isValid = false;
        }
    })
    return {isValid, errors};
}