import {Request, Response} from 'express';
import pool from '../database';

import db from '../database';

class ComentariosController{

    public async lista (req: Request, res: Response) {
        pool.query('SELECT * FROM comentarios', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req: Request, res:Response): Promise <void>{
        const {id} = req.params;
        await pool.query('SELECT * FROM comentarios WHERE id= ?', [id]);
        res.json({text: 'Comentario encontrado'})

    
    }

    public crate (req: Request, res: Response){
        const result = db.query('INSERT INTO comentarios set ?', [req.body]);
        console.log(result)
        res.json({message: 'Comentario saved'});
    }
    public delete (req: Request, res: Response){
        const {id} = req.params;
        db.query('DELETE FROM comentarios WHERE id=?', [id]);
        res.json({message: 'The comentarios was deleted'});
    }

    public update (req: Request, res: Response){
        const {id} = req.params;
        db.query('UPDATE  comentarios SET ? WHERE id = ?', [req.body, id]);
        res.json({message: 'Comentario '});
    }
}

export const comentariosController = new ComentariosController();
