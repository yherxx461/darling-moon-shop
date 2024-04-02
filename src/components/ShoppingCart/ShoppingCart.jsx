// Material UI Imports
import { Card, Grid } from '@mui/material';
import { Button } from '@mui/material';

// Imports:
import { useDispatch, useSelector } from 'react-redux';
import { useState, useMemo } from 'react';

function ShoppingCart() {
  // const [quantity, setQuantity] = useState('');
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  useMemo(() => {
    // useEffect(() => {
    // Total price whenever item in cart changes
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  }, [cart]);

  const handleChange = (event, id) => {
    const newQuantity = parseInt(event.target.value, 10);
    dispatch({
      type: 'UPDATE_QUANTITY_REQUEST',
      payload: { id: id, quantity: newQuantity },
    });
  };

  const handleDeleteItem = (id) => {
    dispatch({
      type: 'DELETE_CART_ITEM',
      payload: id,
    });
  };

  const handleOrderCheckout = () => {
    console.log('in handleOrderCheckout');
  };
  return (
    <>
      <div>
        <h3>Shopping Cart</h3>
        {/* .toFixed(2) means that it displayed the price with two decimal places */}
        <Grid spacing={0}>
          <p>Total: ${totalPrice.toFixed(2)}</p>
          {/* Mapping/fetching the item in the cart */}
          {cart.map((item) => (
            <Card key={item.id} className="selectedItems">
              <img src={item.image_1} />
              <p>{item.name}</p>
              Qty:
              <select
                name="quantity"
                value={item.quantity}
                onChange={(event) => handleChange(event, item.id)}
              >
                {/* Limiting quantity to 10 only */}
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}></option>
                  //     {/* <option value="1">1</option>
                  //   <option value="2">2</option>
                  //   <option value="3">3</option>
                  //   <option value="4">4</option>
                  //   <option value="5">5</option>
                  //   <option value="6">6</option>
                  //   <option value="7">7</option>
                  //   <option value="8">8</option>
                  //   <option value="9">9</option>
                  // <option value="10">10</option> */}
                ))}
              </select>
              <p>Price: ${item.price.toFixed(2)}</p>
              <Button
                size="small"
                variant="outlined"
                type="button"
                onClick={() => handleDeleteItem(item.id)}
              >
                Remove
              </Button>
            </Card>
          ))}
          <Card className="totalCost">
            {/* TO-DO: Total */}
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
        </Grid>
      </div>
    </>
  );
}

export default ShoppingCart;
