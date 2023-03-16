import {Request, Response} from 'express';
import pool from '../database';

import db from '../database';

class CursosAprobadosController{

    public async lista (req: Request, res: Response) {
        pool.query('SELECT * FROM cursos', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req: Request, res:Response): Promise <void>{
        const {id} = req.params;
        await pool.query('SELECT * FROM cursos WHERE id= ?', [id]);
        res.json({text: 'cursos encontrado'})

    
    }

    public crate (req: Request, res: Response){
        const result = db.query('INSERT INTO cursos set ?', [req.body]);
        console.log(result)
        res.json({message: 'cursos saved'});
    }
    public delete (req: Request, res: Response){
        const {id} = req.params;
        db.query('DELETE FROM cursos WHERE id=?', [id]);
        res.json({message: 'The cursos was deleted'});
    }

    public update (req: Request, res: Response){
        const {id} = req.params;
        db.query('UPDATE  cursos SET ? WHERE id = ?', [req.body, id]);
        res.json({message: 'cursos '});
    }
}

export const cursosaprobadosController = new CursosAprobadosController();
