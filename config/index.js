import dotenv from 'dotenv';

dotenv.config({});

export default {
  server: {
    port: process.env.PORT || 3000,
  },
  database: {
    uri: process.env.DB_URI || 'mongodb://localhost',
    name: process.env.DB_NAME || 'main',
  },
  databaseTest: {
    uri: process.env.DB_URI_TEST || 'mongodb://localhost',
    name: process.env.DB_NAME_TEST || 'test',
  },
  token: {
    secret: process.env.JWT_SECRET,
  },
};
