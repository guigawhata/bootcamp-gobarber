import { Router } from 'express';

import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello World!' });
});

routes.use('/sessions', sessionsRouter);

routes.use('/users', usersRouter);
routes.use('/appointments', appointmentsRouter);

export default routes;
