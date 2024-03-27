const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET route request
router.get('/', (req, res) => {
  // GET query to get addresses
  const query = `SELECT * FROM "addresses" ORDER BY "id" ASC;`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('ERROR: Get all addresses', error);
      res.sendStatus(500);
    });
});

// POST route request
router.post('/', (req, res) => {
  // POST route code
  const street = req.body.street;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;
  const { user_id } = req.params;

  const queryText = `INSERT INTO "addresses" (street, city, state, zip, user_id)
    VALUES ($1, $2, $3, $4, $5) RETURNING id`;
  pool
    .query(queryText, [street, city, state, zip, user_id])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Address not posting', err);
      res.sendStatus(500);
    });
});
module.exports = router;
