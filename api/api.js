/**
 * Instancia principal de express
 */

import express from 'express';
import { authorRoutes } from './routes/index.js';

const api = express();

api.get('/', (_, res) => {
  return res.json({
    msg: 'API funcionando',
  });
});

api.use(authorRoutes);

export default api;
