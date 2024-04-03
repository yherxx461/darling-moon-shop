const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// POST Route to handle checkout
router.post('/checkout', (req, res) => {
  const { item, addressId, userId } = req.body;

  const orderDate = new Date();
  const queryText = `INSERT INTO orders (order_date, address_id, user_id) VALUES ($1, $2, $3);`;
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
