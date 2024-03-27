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

module.exports = router;
