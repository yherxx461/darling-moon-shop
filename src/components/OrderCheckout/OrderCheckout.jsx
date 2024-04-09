import { Box, Link, Grid, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// import './OrderCheckout.css';

function OrderCheckout() {
  const user = useSelector((store) => store.user);
  const addresses = useSelector((store) => store.address);
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const history = useHistory();

  const [totalPrice, setTotalPrice] = useState(0);
  const [defaultAddress, setDefaultAddress] = useState(null);

  useEffect(() => {
    // Dispatch an action to fetch products when the component mounts
    dispatch({ type: 'FETCH_CART' });
    dispatch({ type: 'FETCH_ADDRESS' });
  }, [dispatch]);

  // Total price when chart quantity/item changes
  useEffect(() => {
    const totalPrice = cart.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    setTotalPrice(totalPrice);
  }, [cart]);

  // Get time of when the cart is cleared
  // const addressId = addresses.length > 0 ? addresses[0].id : null;
  // const orderDetails = {
  //   addressId: addressId,
  useEffect(() => {
    const defaultAddress = addresses.find((address) => address.isDefault);
    setDefaultAddress(defaultAddress);
  }, [addresses]);

  const handleSubmitOrderCheckout = () => {
    if (!defaultAddress) {
      alert('Please set a default address before placing the order.');
      return;
    }
    const orderDetails = {
      addressId: defaultAddress.id,
    };
    // Dispatch action to clear cart
    dispatch({ type: 'CLEAR_CART' });
    dispatch({ type: 'SUBMIT_ORDER_REQUEST', payload: orderDetails });
    history.push('/order-confirmation');
  };

  return (
    <>
      <div>
        <h1>Order Checkout</h1>
      </div>
      <div>
        Total: ${totalPrice.toFixed(2)}
        <br></br>
        <Button
          variant="outlined"
          size="small"
          onClick={handleSubmitOrderCheckout}
        >
          <Link to="/order-confirmation">Order Checkout</Link>
        </Button>
      </div>
      <div>
        <h3 className="page-title">Ship To:</h3>
      </div>
      {addresses.length > 0 ? (
        addresses.map((address) => (
          <div key={address.id} className="shipping-address">
            <Box>
              <p>{user.name}</p>
              <p>{address.street}</p>
              <p>
                {address.city}, {address.state} {address.zip}
              </p>
            </Box>
          </div>
        ))
      ) : (
        <p>No address found</p>
      )}
      <div>
        <Box className="item-list">
          <h3>Orders</h3>
          {cart.map((product) => (
            <div key={product.id}>
              <img src={product.img} />
              <h3>{product.product_name}</h3>
              <p>
                $ {product.price} x {product.quantity}
              </p>
            </div>
          ))}
        </Box>
      </div>
    </>
  );
}
// }

export default OrderCheckout;
