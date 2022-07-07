import express from 'express';
import { bookController } from '../controllers/index.js';

const router = express.Router();

router
  .route('/books')
  .get(bookController.getAllBooks)
  .post(bookController.createBook);

router
  .route('/books/:id')
  .get(bookController.getBookById)
  .put(bookController.updateBookById)
  .delete(bookController.deleteBookById);

export default router;
/**
 * /books         GET
 * /books         POST
 * /books/:id    GET
 * /books/:id    PUT
 * /books/:id    DELETE
 */
