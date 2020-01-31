import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

// Users
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.post('/users', UserController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
