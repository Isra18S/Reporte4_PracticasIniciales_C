import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import publicacionesRoutes from './routes/publicacionesRoutes';
import comentariosRoutes from './routes/comentariosRoutes';
import register from './routes/registerRoutes';
import cursosRoutes from './routes/cursosRoutes';
import cursosaprobadosRoutes from './routes/cursosaprobadosRoutes';
import registerRoutes from './routes/registerRoutes';

class   Server {

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    routes(): void{
        this.app.use(indexRoutes);
        this.app.use('/api/publicaciones',publicacionesRoutes)
        this.app.use('/api/comentarios',comentariosRoutes)
        this.app.use('/api/register', registerRoutes)
        this.app.use('/api/cursos', cursosRoutes)
        this.app.use('/api/cursosaprobados', cursosaprobadosRoutes)


    }
    start(): void{
        this.app.listen(this.app.get('port'), ()=>{
    console.log('Server on port', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();


