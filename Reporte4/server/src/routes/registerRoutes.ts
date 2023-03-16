import { Router } from 'express';
import { usersController } from '../controllers/usersControllers';

class RegisterRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/',usersController.lista);
        this.router.get('/:id',usersController.getOne);
        this.router.post('/', usersController.crate);
        this.router.put('/:id', usersController.update);
        this.router.delete('/:id',usersController.delete);
    }
}

const registersRoutes = new RegisterRoutes();
export default registersRoutes.router;