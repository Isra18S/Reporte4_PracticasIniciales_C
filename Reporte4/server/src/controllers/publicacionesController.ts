import {Request, Response} from 'express';
import pool from '../database';

import db from '../database';

class PublicacionesController{



    public async lista (req: Request, res: Response) {
        pool.query('SELECT * FROM publicaciones', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req: Request, res:Response): Promise <void>{
        const {id} = req.params;
        await pool.query('SELECT * FROM publicaciones WHERE id= ?', [id]);
        res.json({text: 'Publicacion encontrada'})

    
    }

    public async getOneTipo(req: Request, res:Response): Promise <void>{
        const {tipo} = req.params;
        await pool.query('SELECT * FROM publicaciones WHERE tipo= ?', [tipo]);
        res.json({text: 'Publicacion encontrada'})

    
    }

    //public getOne(req: Request, res: Response){
     // const {id} = req.params;
     // db.query('SELECT * FROM publicaciones WHERE id = ?', [id], function(err, result, fields) {
      //  if (err) throw err;
       // res.json(result);
    //});
    //} 
    public crate (req: Request, res: Response){
        const result = db.query('INSERT INTO publicaciones set ?', [req.body]);
        console.log(result)
        res.json({message: 'Publication saved'});
    }
    public delete (req: Request, res: Response){
        const {id} = req.params;
        db.query('DELETE FROM publicaciones WHERE id=?', [id]);
        res.json({message: 'The publication was deleted'});
    }
    public update (req: Request, res: Response){
        const {id} = req.params;
        db.query('UPDATE  publicaciones SET ? WHERE id = ?', [req.body, id]);
        res.json({message: 'Publication '});
    }
}

export const publicacionesController = new PublicacionesController();
