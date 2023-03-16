"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comentariosController_1 = require("../controllers/comentariosController");
class ComentariosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', comentariosController_1.comentariosController.lista);
        this.router.get('/:id', comentariosController_1.comentariosController.getOne);
        this.router.post('/', comentariosController_1.comentariosController.crate);
        this.router.put('/:id', comentariosController_1.comentariosController.update);
        this.router.delete('/:id', comentariosController_1.comentariosController.delete);
    }
}
const comentariosRoutes = new ComentariosRoutes();
exports.default = comentariosRoutes.router;
