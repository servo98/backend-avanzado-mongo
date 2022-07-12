import express from 'express';
import { authorController } from '../controllers/index.js';
import { validateAuthor } from '../middlewares/index.js';

const router = express.Router();

router
  .route('/authors')
  .get(authorController.getAllAuthors)
  .post(validateAuthor, authorController.createAuthor);

router
  .route('/authors/:id')
  .get(authorController.getAuthorById)
  .put(authorController.updateAuthorById)
  .delete(authorController.deleteAuhorById);

export default router;
/**
 * /authors         GET
 * /authors         POST
 * /authors/:id    GET
 * /authors/:id    PUT
 * /authors/:id    DELETE
 */
