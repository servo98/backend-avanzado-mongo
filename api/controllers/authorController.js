/**
 * /authors         GET
 * /authors         POST
 * /authors/:id    GET
 * /authors/:id    PUT
 * /authors/:id    DELETE
 */

import { Author } from '../models/index.js';

const getAllAuthors = async (_, res) => {
  try {
    const authors = await Author.find();
    return res.json({
      msg: 'Usuarios obtenidos',
      authors,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar todos los autores',
      error,
    });
  }
};

const createAuthor = () => {};

const getAuthorById = () => {};

const updateAuthorById = () => {};

const deleteAuhorById = () => {};

export {
  getAllAuthors,
  createAuthor,
  getAuthorById,
  updateAuthorById,
  deleteAuhorById,
};
