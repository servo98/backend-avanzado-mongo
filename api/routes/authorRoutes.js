import express from 'express';

const router = express.Router();

router
  .route('/authors')
  .get((req, res) => {
    return res.json({
      msg: 'ESto es la ruta de GET /authors',
    });
  })
  .post((req, res) => {
    return res.json({
      msg: 'ESto es la ruta de POST /authors',
    });
  });

router
  .route('/authors/:id')
  .get((req, res) => {
    return res.json({
      msg: 'ESto es la ruta de GET /authors/:id',
    });
  })
  .put((req, res) => {
    return res.json({
      msg: 'ESto es la ruta de PUT /authors/:id',
    });
  })
  .delete((req, res) => {
    return res.json({
      msg: 'ESto es la ruta de DELETE /authors/:id',
    });
  });

/**
 * /authors         GET
 * /authors         POST
 * /authors/:id    GET
 * /authors/:id    PUT
 * /authors/:id    DELETE
 */

export default router;
