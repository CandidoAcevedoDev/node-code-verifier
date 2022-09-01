import express, { Express, Request, Response } from 'express';

// * Enviorement Variables
import dotenv from 'dotenv';

// * Segurity
import cors from 'cors';
import helmet from 'helmet';

// TODO: HTTPS

// * Root Router
import router from '../routes';

// * Create server
const server: Express = express();

// Define SERVER to use "/api" and execute rootRouter from 'index.ts' in routes
// Fron this point onover: http://localhost:8000/api/...
server.use('/api', router);

// TODO: Mongoose Conection

// * Segurity Config
server.use(helmet());
server.use(cors());

// * Content Type Config
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));

// * Redirection Config
// http://localhost:8000/ --> http://localhost:8000/api/
server.get('/', (req: Request, res: Response) => {
	res.redirect('/api');
});

export default server;
