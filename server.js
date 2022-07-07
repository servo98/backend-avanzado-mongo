/**
 * TODO: server http importando api
 */
import http from 'http';

import api from './api/api.js';
import database from './config/database.js';

import config from './config/index.js';

const { server: serverCnf } = config;

const server = http.createServer(api);

const onError = (err) => {
  console.error('Ha ocurrido un error en el server', err);
};

const onListening = () => {
  console.info('Servidor ejectutándose en el puerto', serverCnf.port);
};

server.on('listening', onListening);
server.on('error', onError);

server.listen(serverCnf.port);
database();
