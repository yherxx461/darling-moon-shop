// Material UI Imports
import { Button } from '@mui/material';
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
    <div className="container">
      <div className="shopping-cart-items">
        <h1 className="shopping-title">Shopping Cart</h1>
        {/* </Card> */}
      </div>
      {/* Mapping/fetching the items in the cart */}
      <div className="items-container">
        {cart.map((item) => (
          <ShoppingCartItem item={item} className="item-details" />
        ))}
      </div>
      {/* <Card className="container"> */}
      <div className="shopping-cart-sidebar">
        <div className="total-container">
          <p>Total: ${totalPrice.toFixed(2)}</p>
          <Button
            className="btn"
            size="small"
            variant="outlined"
            onClick={handleProceedToOrderCheckout}
          >
            Proceed to Order Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
