import { Router } from 'express';

import { cursosaprobadosController } from '../controllers/cursosAprobadosController';

class CursosAprobadosRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/',cursosaprobadosController.lista);
        this.router.get('/:id',cursosaprobadosController.getOne);
        this.router.post('/', cursosaprobadosController.crate);
        this.router.put('/:id', cursosaprobadosController.update);
        this.router.delete('/:id',cursosaprobadosController.delete);
    }
}

const cursosAprobadosRoutes = new CursosAprobadosRoutes();
export default cursosAprobadosRoutes.router;