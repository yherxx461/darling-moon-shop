const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

// GET route request
router.get('/', rejectUnauthenticated, (req, res) => {
  // GET query to get addresses
  const query = `SELECT * FROM "address" WHERE "user_id" = $1;`;
  pool
    .query(query, [req.user.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('ERROR: Get all address', error);
      res.sendStatus(500);
    });
});

// POST route request
router.post('/', rejectUnauthenticated, (req, res) => {
  // POST route code
  const street = req.body.street;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;
  const { user_id } = req.params;

  const queryText = `INSERT INTO "address" (street, city, state, zip, user_id)
    VALUES ($1, $2, $3, $4, $5) RETURNING id;`;
  pool
    .query(queryText, [street, city, state, zip, user_id])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Address not posting', err);
      res.sendStatus(500);
    });
});

// PUT route request
router.put('/:id', rejectUnauthenticated, (req, res) => {
  // POST route code
  const { id } = req.params;
  const { street, city, state, zip } = req.body;
  const queryText = `UPDATE "address" SET street = $1, city = $2, state = $3, zip = $4 WHERE "id" = $5;`;
  const queryArgs = [street, city, state, zip, id];

  pool
    .query(queryText, queryArgs)
    .then(() => {
      console.log(`PUT /address/${id} - SUCCESS`);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('Address PUT route not updating', err);
      res.sendStatus(500);
    });
});

// PUT route request
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  // POST route code
  const { id } = req.params;

  const queryText = `DELETE FROM "address" WHERE "id" = $1;`;

  pool
    .query(queryText, [id])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Unable to delete address', err);
      res.sendStatus(500);
    });
});
module.exports = router;
