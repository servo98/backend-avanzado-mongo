const mongoose = require('mongoose');

require('dotenv').config({});

console.info('Variable de entorno DB_PASWORD', process.env.DB_PASSWORD);

mongoose.connect(
  process.env.DB_PASSWORD
  //Protocolo ://usuario      :contraseña      @host/ip                          /nombre base de datos
);

module.exports = {
  mongoose,
};
