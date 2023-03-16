"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cursosController = void 0;
const database_1 = __importDefault(require("../database"));
const database_2 = __importDefault(require("../database"));
class CursosController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query('SELECT * FROM cursosDisp', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT * FROM cursosDisp WHERE id= ?', [id]);
            res.json({ text: 'cursosDisp encontrada' });
        });
    }
    crate(req, res) {
        const result = database_2.default.query('INSERT INTO cursos set ?', [req.body]);
        console.log(result);
        res.json({ message: 'cursos saved' });
    }
    delete(req, res) {
        const { id } = req.params;
        database_2.default.query('DELETE FROM cursosDisp WHERE id=?', [id]);
        res.json({ message: 'The cursosDisp was deleted' });
    }
    update(req, res) {
        const { id } = req.params;
        database_2.default.query('UPDATE  cursosDisp SET ? WHERE id = ?', [req.body, id]);
        res.json({ message: 'cursosDisp ' });
    }
}
exports.cursosController = new CursosController();
