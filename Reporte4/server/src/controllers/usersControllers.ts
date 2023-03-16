import {Request, Response} from 'express';
import pool from '../database';

import db from '../database';

class UsersController{
   
    public async lista (req: Request, res: Response) {
        pool.query('SELECT * FROM users', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }


    public getOne(req: Request, res: Response){
      const {id} = req.params;
      db.query('SELECT * FROM users WHERE id = ?', [id], function(err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
   
    } 
    public crate (req: Request, res: Response){
        const result = db.query('INSERT INTO users set ?', [req.body]);
        console.log(result)
        res.json({message: 'user saved'});
    }
    public delete (req: Request, res: Response){
        const {id} = req.params;
        db.query('DELETE FROM users WHERE id=?', [id]);
        res.json({message: 'The user was deleted'});
    }
    public update (req: Request, res: Response){
        const {id} = req.params;
        db.query('UPDATE  users SET ? WHERE id = ?', [req.body, id]);
        res.json({message: 'user UPDATE '});
    }
}




export const usersController = new UsersController();