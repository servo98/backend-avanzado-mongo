/**
 * Instancia principal de express
 */

import express from 'express';

const api = express();

api.get('/', (_, res) => {
  return res.json({
    msg: 'API funcionando',
  });
});

export default api;
