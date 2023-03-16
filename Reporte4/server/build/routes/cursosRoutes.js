"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cursos_1 = require("../controllers/cursos");
class CursosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', cursos_1.cursosController.lista);
        this.router.get('/:id', cursos_1.cursosController.getOne);
        this.router.post('/', cursos_1.cursosController.crate);
        this.router.put('/:id', cursos_1.cursosController.update);
        this.router.delete('/:id', cursos_1.cursosController.delete);
    }
}
const cursosRoutes = new CursosRoutes();
exports.default = cursosRoutes.router;
