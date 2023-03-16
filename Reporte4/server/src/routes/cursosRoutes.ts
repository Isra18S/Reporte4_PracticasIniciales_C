import { Router } from 'express';

import { cursosController } from '../controllers/cursos';

class CursosRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/',cursosController.lista);
        this.router.get('/:id',cursosController.getOne);
        this.router.post('/', cursosController.crate);
        this.router.put('/:id', cursosController.update);
        this.router.delete('/:id',cursosController.delete);
        
    }
}

const cursosRoutes = new CursosRoutes();
export default cursosRoutes.router;