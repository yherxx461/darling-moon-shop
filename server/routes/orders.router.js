const express = require('express');
const pool = require('../modules/pool');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const router = express.Router();

// GET Request
router.get('/', rejectUnauthenticated, (req, res) => {
  const query = `SELECT orders.id, orders.order_date, address.street AS street, address.city AS city, address.state AS state, address.zip AS zip, user.name AS user_name FROM orders
  JOIN address ON orders.address_id = address.id
  JOIN user ON orders.user_id = user.id;`;

  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('ERROR: Get all items added to cart', error);
      res.sendStatus(500);
    });
});

// POST Route to handle checkout
router.post('/', (req, res) => {
  const { item, addressId, userId } = req.body;

  const orderDate = new Date();
  const queryText = `INSERT INTO orders (order_date, address_id, user_id) VALUES ($1, $2, $3) RETURNING id;`;
  const values = [orderDate, addressId, userId];

  pool.query(queryText, values).then((result) => {
    const orderId = result.rows[0].id;

    const lineItemsQuery = `INSERT INTO line_items (order_id, product_id, quantity) VALUES ($1, $2, $3);`;
    const lineItemsValues = item.map((item) => [
      orderId,
      item.product_id,
      item.quantity,
    ]);

    pool
      .query(lineItemsQuery, lineItemsValues)
      .then(() => {
        res.sendStatus(201);
      })
      .catch((error) => {
        console.error('ERROR inserting line items:', error);
      })
      .catch((error) => {
        console.error('ERROR inserting order', error);
        res.sendStatus(500);
      });
  });
});

module.exports = router;
