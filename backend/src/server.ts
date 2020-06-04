import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';

import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';

import routes from './routes';

import uploadConfig from './config/upload';
import AppError from './errors/AppError';

import './database';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/files', express.static(uploadConfig.directory));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }

  // eslint-disable-next-line no-console
  console.error(err);

  return response
    .status(500)
    .json({ status: 'error', message: 'Internal Server Error' });
});

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('Server started on port 3333!');
});
