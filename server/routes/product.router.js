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

// POST route request
router.post('/', (req, res) => {
  // POST route code
  const image_url_1 = req.body.image_url_1;
  const image_url_2 = req.body.image_url_2;
  const image_url_3 = req.body.image_url_3;
  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;

  const queryText = `INSERT INTO "products" (image_url_1, image_url_2, image_url_3, name, description, price)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`;
  pool
    .query(queryText, [
      image_url_1,
      image_url_2,
      image_url_3,
      name,
      description,
      price,
    ])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Products not posting visually ', err);
      res.sendStatus(500);
    });
});

// GET request for Featured Products
router.get('/featured', (req, res) => {
  // Add query to get all products --> If want to display price --> update query below and the database table
  const query = `SELECT * FROM "products" WHERE "featured_item" = TRUE ORDER BY "id" ASC;`;
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

module.exports = router;
