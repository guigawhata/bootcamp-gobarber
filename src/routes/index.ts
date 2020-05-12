import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello World!' });
});

routes.use('/appointments', appointmentsRouter);

export default routes;
