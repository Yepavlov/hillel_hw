"use strict";

import UsersModel from "./users/Model.js";
import UsersView from "./users/View.js";
import UsersController from "./users/Controller.js";

const url = 'https://jsonplaceholder.typicode.com/users'

document.addEventListener('DOMContentLoaded', () => {
    const model = new UsersModel(url);
    const view = new UsersView();
    const app = new UsersController(model, view);
});