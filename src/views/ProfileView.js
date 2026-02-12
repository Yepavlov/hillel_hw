const elements = {
    inputs: {
        firstName: document.getElementById('firstName'),
        lastName: document.getElementById('lastName'),
        email: document.getElementById('email'),
    },
    buttons: {
        save: document.getElementById('saveBtn'),
        freeze: document.getElementById('freezeBtn'),

    },
    display: {
        error: document.getElementById('error-block'),
        name: document.getElementById('previewName'),
        email: document.getElementById('previewEmail'),
        date: document.getElementById('previewDate'),
    }
};


export const ProfileView = {
    getFormData() {
        return {
            firstName: elements.inputs.firstName.value,
            lastName: elements.inputs.lastName.value,
            email: elements.inputs.email.value,
        };
    },

    updatePreview(fullName, email) {
        elements.display.name.textContent = fullName;
        elements.display.email.textContent = email;
        elements.display.date.textContent = new Date().toLocaleString();
    },

    showError(message, fieldName = null) {
        elements.display.error.textContent = message;
        elements.display.error.style.color = "red";
        if (fieldName && elements.inputs[fieldName]) {
            elements.inputs[fieldName].classList.add("invalid");
        }
    },

    clearErrors() {
        elements.display.error.textContent = "";
        Object.values(elements.inputs).forEach(input => {
            input.classList.remove("invalid");
        });
    },

    showSuccess(message) {
        elements.display.error.textContent = message;
        elements.display.error.style.color = "green";
    },

    lockInterface() {
        elements.buttons.freeze.disabled = true;
        elements.buttons.freeze.textContent = "Frozen";
        elements.buttons.save.disabled = true;
    },

    bindSave(handler) {
        elements.buttons.save.addEventListener("click", handler);
    },

    bindFreeze(handler) {
        elements.buttons.freeze.addEventListener("click", handler);
    },

    bindInputClear(handler) {
        Object.values(elements.inputs).forEach(input => {
            input.addEventListener("input", handler);
        });
    },
};