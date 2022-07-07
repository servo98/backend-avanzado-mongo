import mongoose from 'mongoose';
import config from './index.js';

const db = mongoose.connection;

db.on('connecting', () => {
  console.log('Intentando conectar a la base de datos 🙄');
});

db.on('error', () => {
  console.error('💀 👺Ha ocurrido un error en la conexión de la base de datos');
});

db.on('connected', () => {
  console.log('🟩 Conexión establecida con la base de datos');
});

db.on('disconnected', () => {
  console.log('😫 Se ha desconectado la base de datos');
});

db.on('reconnected', () => {
  console.log('Se ha reconectado la base 🤗');
});

export default () => {
  mongoose.connect(`${config.database.uri}/${config.database.name}`);
};
