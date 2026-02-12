"use strict";


import {createProfileModel} from "./models/ProfileModel.js";
import {ProfileView} from "./views/ProfileView.js";

const model = createProfileModel();

const handleSave = () => {
    ProfileView.clearErrors();
    const data = ProfileView.getFormData();

    try {
        try {
            model.firstName = data.firstName;
        } catch (e) {
            ProfileView.showError(e.message, 'firstName');
            throw e;
        }
        try {
            model.lastName = data.lastName;
        } catch (e) {
            ProfileView.showError(e.message, 'lastName');
            throw e;
        }
        try {
            model.email = data.email;
        } catch (e) {
            ProfileView.showError(e.message, 'email');
            throw e;
        }
        ProfileView.updatePreview(model.fullName, model.email);
        ProfileView.showSuccess("Saved successfully!");

    } catch (error) {
        if (Object.isFrozen(model)) {
            ProfileView.showError("Cannot save: Model is frozen!");
        }
    }
};

const handleFreeze = () => {
    Object.freeze(model);
    ProfileView.lockInterface();
    ProfileView.showSuccess("Model frozen.");
};

const handleInput = () => {
    ProfileView.clearErrors();
};

ProfileView.bindSave(handleSave);
ProfileView.bindFreeze(handleFreeze);
ProfileView.bindInputClear(handleInput);

console.log("App initialized");
