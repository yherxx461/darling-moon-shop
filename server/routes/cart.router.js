const express = require('express');
const pool = require('../modules/pool');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const router = express.Router();

// GET route request
router.get('/', rejectUnauthenticated, (req, res) => {
  // GET query to get item in cart
  // const query = `SELECT * FROM "line_items" ORDER BY "id" ASC`;
  const query = `SELECT line_items.id AS id, products.name AS product_name, products.price AS price, line_items.quantity AS quantity, line_items.order_id AS order_id, line_items.product_id AS product_id 
  FROM line_items JOIN orders ON line_items.order_id = orders.id 
  JOIN products ON products.id = line_items.product_id
  WHERE orders.user_id = $1;`;

  pool
    .query(query, [req.user.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('ERROR: Get all items added to cart', error);
      res.sendStatus(500);
    });
});

// POST route request
router.post('/', rejectUnauthenticated, (req, res) => {
  // POST route code
  // const { order_date, address_id } = req.body; // initial query
  const { order_date, address_id, quantity, product_id, order_id } = req.body; // updated query

  if (!order_id) {
    const queryText1 = `INSERT INTO "orders" (order_date, address_id, user_id)
    VALUES ($1, $2, $3) RETURNING id;`;

    pool
      .query(queryText1, [order_date, address_id, req.user.id])
      .then((response) => {
        const newOrderId = response.rows[0].id; // the new inserted order
        const queryText2 = `INSERT INTO "line_items" (quantity, order_id, product_id)
        VALUES ($1, $2, $3) RETURNING id;`;

        //     console.log('response.data', response);
        //     const queryText = `INSERT INTO "line_items" (quantity, order_id, product_id)
        // VALUES ($1, $2, $3) RETURNING id;`;
        pool
          .query(queryText2, [quantity, newOrderId, product_id])
          .then(() => res.sendStatus(201))
          .catch((err) => {
            console.log('Item not posting to Cart', err);
            res.sendStatus(500);
          });
      })
      .catch((err) => {
        console.log('New Item added to Cart', err);
        res.sendStatus(500);
      });
  } else {
    const queryText = `INSERT INTO "line_items" (quantity, order_id, product_id)
    VALUES ($1, $2, $3) RETURNING id;`;

    pool
      .query(queryText, [quantity, order_id, product_id])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('Error inserting line item', err);
        res.sendStatus(500);
      });
  }
});

// PUT route request
router.put('/:id', rejectUnauthenticated, (req, res) => {
  // PUT route code
  const { quantity, order_id, product_id } = req.body;
  const { id } = req.params;
  const queryText = `UPDATE "line_items" SET quantity = $1 WHERE "id" = $2;`;

  pool
    .query(queryText, [quantity, order_id, product_id, id])
    .then(() => {
      console.log(`PUT /cart/${id} - SUCCESS`);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('Unable to update item', err);
      res.sendStatus(500);
    });
});

// DELETE route request
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  // DELETE route code
  const { id } = req.params;

  const queryText = `DELETE FROM "line_items" WHERE "id" = $1;`;

  pool
    .query(queryText, [id])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Unable to delete item', err);
      res.sendStatus(500);
    });
});
module.exports = router;
