"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const publicacionesController_1 = require("../controllers/publicacionesController");
class PublicacionesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', publicacionesController_1.publicacionesController.lista);
        this.router.get('/:id', publicacionesController_1.publicacionesController.getOne);
        this.router.post('/', publicacionesController_1.publicacionesController.crate);
        this.router.put('/:id', publicacionesController_1.publicacionesController.update);
        this.router.delete('/:id', publicacionesController_1.publicacionesController.delete);
    }
}
const publicacionesRoutes = new PublicacionesRoutes();
exports.default = publicacionesRoutes.router;
