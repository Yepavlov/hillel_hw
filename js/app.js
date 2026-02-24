"use strict";

import Model from "./notes/Model.js";
import View from "./notes/View.js";
import Controller from "./notes/Controller.js";
import {noteSchema} from "./notes/schemas.js";


document.addEventListener('DOMContentLoaded', () => {
    const model = new Model(noteSchema, "notes");

    const view = new View();

    const controller = new Controller(model, view);
});