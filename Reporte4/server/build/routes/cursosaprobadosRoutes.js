"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cursosAprobadosController_1 = require("../controllers/cursosAprobadosController");
class CursosAprobadosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', cursosAprobadosController_1.cursosaprobadosController.lista);
        this.router.get('/:id', cursosAprobadosController_1.cursosaprobadosController.getOne);
        this.router.post('/', cursosAprobadosController_1.cursosaprobadosController.crate);
        this.router.put('/:id', cursosAprobadosController_1.cursosaprobadosController.update);
        this.router.delete('/:id', cursosAprobadosController_1.cursosaprobadosController.delete);
    }
}
const cursosAprobadosRoutes = new CursosAprobadosRoutes();
exports.default = cursosAprobadosRoutes.router;
