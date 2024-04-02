const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET route request
router.get('/', (req, res) => {
  // Add query to get all products
  const query = `SELECT * FROM "products" ORDER BY "id" ASC;`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('ERROR: Get all products', error);
      res.sendStatus(500);
    });
});

// GET request for Featured Products
router.get('/featured', (req, res) => {
  // Add query to get all products --> If want to display price --> update query below and the database table
  const query = `SELECT * FROM "products" WHERE "featured_item" = true ORDER BY "id" ASC;`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('ERROR: Get all featured products', error);
      res.sendStatus(500);
    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  pool
    .query('SELECT * FROM products WHERE id = $1', [id])
    .then((result) => {
      if (result.rows.length > 0) {
        res.json(result.rows[0]);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    })
    .catch((error) => {
      console.error('Error fetching individual product:', error);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

// POST route request
router.post('/', (req, res) => {
  // POST route code
  const image_1 = req.body.image_1;
  const image_2 = req.body.image_2;
  const image_3 = req.body.image_3;
  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;

  const queryText = `INSERT INTO "products" (image_1, image_2, image_3, name, description, price)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`;
  pool
    .query(queryText, [image_1, image_2, image_3, name, description, price])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Products not posting visually ', err);
      res.sendStatus(500);
    });
});

module.exports = router;
