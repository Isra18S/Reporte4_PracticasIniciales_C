"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersControllers_1 = require("../controllers/usersControllers");
class RegisterRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', usersControllers_1.usersController.lista);
        this.router.get('/:id', usersControllers_1.usersController.getOne);
        this.router.post('/', usersControllers_1.usersController.crate);
        this.router.put('/:id', usersControllers_1.usersController.update);
        this.router.delete('/:id', usersControllers_1.usersController.delete);
    }
}
const registersRoutes = new RegisterRoutes();
exports.default = registersRoutes.router;
