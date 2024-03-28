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

  /// {{{{ SHOULD USER_ID BE PART OF THE QUERY TEXT TOO OR SINCE IT'S ONLY ONE USER PER ACCOUNT, IT'S NOT NEEDED!?}}}}

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

// PUT route request -- {{{{{ THIS IS NOT WORKING YET!!!! }}}}}
router.put('/:id', (req, res) => {
  // POST route code
  const { id } = req.params;
  const queryText = `UPDATE "addresses" SET "street" = $1, city = $2, state = $3, zip = $4 WHERE "id" = $1`;
  pool
    .query(queryText, [id])
    .then(() => {
      console.log(`PUT /addresses/${id} - SUCCESS`);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('Error: Internal error', err);
      res.sendStatus(500);
    });
});
module.exports = router;

// PUT route request
router.delete('/:id', (req, res) => {
  // POST route code
  const { id } = req.params;

  const queryText = `DELETE FROM "addresses" WHERE "id" = $1;`;

  pool
    .query(queryText, [id])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Unable to delete address', err);
      res.sendStatus(500);
    });
});
module.exports = router;
