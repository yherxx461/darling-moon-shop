// Material UI Imports
import { Card, Button, TextField } from '@mui/material';
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem';
// Imports:
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './ShoppingCart.css';

function ShoppingCart() {
  // const [quantity, setQuantity] = useState('');
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const history = useHistory();
  // const product = useSelector((store) => store.products);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(
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

  useEffect(() => {
    dispatch({ type: 'FETCH_PRODUCT' });
    dispatch({ type: 'FETCH_CART' });
  }, []);

  const handleProceedToOrderCheckout = () => {
    console.log('in handleOrderCheckout');
    history.push('/order-checkout');
  };

  return (
    <>
      <div>
        <h3>Shopping Cart</h3>
        {/* .toFixed(2) means that it displayed the price with two decimal places */}
        <Card className="totalCost">
          {/* TO-DO: Total */}
          {/* TO-DO: Order Checkout Button */}
          <p>Total: ${totalPrice.toFixed(2)}</p>
          <Button
            className="btn"
            size="small"
            variant="outlined"
            type="submit"
            onClick={handleProceedToOrderCheckout}
          >
            Proceed to Order Checkout
          </Button>
        </Card>
        {/* Mapping/fetching the item in the cart */}
        {cart.map((item) => (
          <ShoppingCartItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default ShoppingCart;
