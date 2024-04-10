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
  const userId = req.user.id;
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
  const { street, city, state, zip, isDefault } = req.body;
  const userId = req.user.id;
  const zipValue = zip === '' ? null : zip;

  const queryText = `INSERT INTO "address" (street, city, state, zip, is_default, user_id) 
  VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;`;
  console.log(
    'POST Request - SUCCESS: New address posted to database:',
    queryText
  );
  pool
    .query(queryText, [street, city, state, zipValue, isDefault, userId])
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
  const { street, city, state, zip } = req.user.id;
  console.log('Received PUT request to update address:');
  console.log('Address ID:', id);
  console.log('Updated street:', street);
  console.log('Updated city:', city);
  console.log('Updated state:', state);
  console.log('Updated zip:', zip);

  const queryText = `UPDATE "address" SET street = $1, city = $2, state = $3, zip = $4 WHERE "id" = $5;`;
  const queryArgs = [street, city, state, zip, req.user.id];

  pool
    .query(queryText, queryArgs)
    .then(() => {
      console.log(`PUT /address/${id}/default - SUCCESS`);
      res.status(200);
    })
    .catch((err) => {
      console.log('Address PUT route not updating', err);
      res.sendStatus(500);
    });
});

// PUT route request to set an address as default
router.put('/:id/default', rejectUnauthenticated, (req, res) => {
  // PUT route code to set an address as default
  const { id } = req.params;
  console.log('ID received', id);
  if (!Number.isInteger(Number(id))) {
    return res.status(400).send('Invalid address Id');
  }
  const queryText = `UPDATE "address" SET "is_default" = TRUE WHERE "id" = $1;`;

  pool
    .query(queryText, [id])
    .then(() => {
      console.log(`PUT /address/${id}/default - SUCCESS`);
      res.status(200).send('Address set as default successfully');
    })
    .catch((err) => {
      console.log('Error setting address as default', err);
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
    .then(() => res.status(200))
    .catch((err) => {
      console.log('Unable to delete address', err);
      res.sendStatus(500);
    });
});
module.exports = router;
