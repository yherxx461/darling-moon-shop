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

  useMemo(
    (item) => {
      // useEffect(() => {
      // Total price whenever item in cart changes
      let total = 0;
      cart.forEach((item) => {
        total += item.price * item.quantity;
      });
      setTotalPrice(total);
    },
    [cart]
  );

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
        <p>Total: ${totalPrice.toFixed(2)}</p>
        {/* Mapping/fetching the item in the cart */}
        {cart.map((item) => (
          <div key={item.id} className="selectedItems">
            <img src={item.image_1} />
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            <Button
              size="small"
              variant="outlined"
              type="button"
              onClick={() => handleDeleteItem(item.id)}
            >
              Remove
            </Button>
          </div>
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
      </div>
    </>
  );
}

export default ShoppingCart;
