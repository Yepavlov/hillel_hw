"use strict";


import UserModel from './user/Model.js';
import UserView from './user/View.js';
import UserController from './user/Controller.js';

document.addEventListener('DOMContentLoaded', () => {
    const appModel = new UserModel();
    const appView = new UserView();

    const app = new UserController(appModel, appView);
});