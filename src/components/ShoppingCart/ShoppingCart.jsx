// Material UI Imports
import { Card } from '@mui/material';
import { Button } from '@mui/material';

// Imports:
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function ShoppingCart() {
  const [quantity, setQuantityValue] = [];
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  const product = useSelector((store) => store.products);

  useEffect(() => {
    // initial load  --> first load to load once
    dispatch({
      type: 'FETCH_CART',
    });
  }, []);

  const handleDeleteItem = () => {
    console.log('in handleDeleteItem');
  };

  const handleChange = (event) => {
    event.target.value();
    console.log('update handleChange for quantity');
  };

  const handleOrderCheckout = () => {
    console.log('in handleOrderCheckout');
  };
  return (
    <>
      <div>
        <h3>Shopping Cart</h3>
        <Card className="selectedItems">
          {/* TO-DO: Map "Add to Cart" items and listed out the following: */}
          {/* Selected Item will display image_url_1, name, quantity, $ price, and a remove button */}
          <p>{cart}</p>
          <p>Product Name</p>
          {/* <label for="quanity">Quantity: </label> */}
          Qty: {quantity}{' '}
          <select
            name="select-opt"
            id="select-opt"
            defaultValue={1}
            onChange={(event) => handleChange}
            // value={setQuantityValue}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <p>Price: ${product.price}</p>
          <Button
            size="small"
            variant="outlined"
            type="delete"
            onClick={handleDeleteItem}
          >
            Remove
          </Button>
        </Card>
        <Card className="totalCost">
          {/* TO-DO: Total */}
          <p>Total: $ price</p>
          {/* TO-DO: Order Checkout Button */}
          <Button
            size="small"
            variant="outlined"
            type="submit"
            onClick={handleOrderCheckout}
          >
            Order Checkout
          </Button>
        </Card>
      </div>
    </>
  );
}

export default ShoppingCart;
