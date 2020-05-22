import { Router } from 'express';

import StoreSessionsService from '../services/StoreSessionsService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const storeSession = new StoreSessionsService();

  const { user, token } = await storeSession.execute({ email, password });

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
