/**
 * Root Router
 * Redirections to routers
 */
import express, { Express, Request, Response } from 'express';
import helloRouter from './HelloRouter';
import { LogInfo } from '../utils/logger';

// Server instance
let server: Express = express();
// Router intance
let rootRouter = express.Router();

// Active for request to http://localhost:8000/api

// GET Initial http://localhost:8000/api
rootRouter.get('/', (req: Request, res: Response) => {
	LogInfo('GET: http://localhost:8000/api');
	res.status(200).send('Hello world, I learning node express full backend');
});

// Redirections to Routers and Controllers
server.use('/', rootRouter); //http://localhost:8000/api
server.use('/hello', helloRouter); //http://localhost:8000/api/hello -> helloRouter

export default server;
