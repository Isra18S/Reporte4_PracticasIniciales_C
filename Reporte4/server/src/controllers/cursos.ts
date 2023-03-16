import {Request, Response} from 'express';
import pool from '../database';

import db from '../database';

class CursosController{
    public async lista (req: Request, res: Response) {
        pool.query('SELECT * FROM cursosDisp', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req: Request, res:Response): Promise <void>{
        const {id} = req.params;
        await pool.query('SELECT * FROM cursosDisp WHERE id= ?', [id]);
        res.json({text: 'cursosDisp encontrada'})
    }

    public crate (req: Request, res: Response){
        const result = db.query('INSERT INTO cursos set ?', [req.body]);
        console.log(result)
        res.json({message: 'cursos saved'});
    }

    public delete (req: Request, res: Response){
        const {id} = req.params;
        db.query('DELETE FROM cursosDisp WHERE id=?', [id]);
        res.json({message: 'The cursosDisp was deleted'});
    }
    
    public update (req: Request, res: Response){
        const {id} = req.params;
        db.query('UPDATE  cursosDisp SET ? WHERE id = ?', [req.body, id]);
        res.json({message: 'cursosDisp '});
    }
}

export const cursosController = new CursosController();
