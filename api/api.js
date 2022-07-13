/**
 * Instancia principal de express
 */

import express from 'express';
import { authorRoutes, bookRoutes, authRoutes } from './routes/index.js';
import { protectedRoute } from './middlewares/index.js';

const api = express();

api.use(express.json());
api.use(express.urlencoded({ extended: true }));

api.use(authRoutes);
api.get('/', (_, res) => {
  return res.json({
    msg: 'API funcionando',
  });
});

api.use(protectedRoute);

api.use(authorRoutes);
api.use(bookRoutes);

export default api;
