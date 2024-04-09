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
    if (cart.length > 0) {
      const totalPrice = cart.reduce((acc, product) => {
        return acc + product.price * product.quantity;
      }, 0);
      setTotalPrice(totalPrice);
    }
  }, [cart]);

  // Get time of when the cart is cleared
  // const addressId = addresses.length > 0 ? addresses[0].id : null;
  // const orderDetails = {
  //   addressId: addressId,
  useEffect(() => {
    const defaultAddress = addresses.find((address) => address.isdefault);
    setDefaultAddress(defaultAddress);
  }, [addresses]);

  const handlePlaceOrder = () => {
    if (!defaultAddress) {
      // alert('Please set a default address before placing the order.');
      return;
    }
    const orderDetails = {
      order_date: new Date().toISOString(),
      address_id: defaultAddress.id,
      // Capture current date and time:
    };
    // Dispatch action to clear cart
    dispatch({ type: 'SUBMIT_ORDER_REQUEST', payload: orderDetails });
    dispatch({ type: 'CLEAR_CART' });
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
        <Link to="/order-confirmation">
          <Button variant="outlined" size="small" onClick={handlePlaceOrder}>
            Place Order
          </Button>
        </Link>
      </div>
      <div>
        <h3 className="page-title">Ship To:</h3>
      </div>
      {defaultAddress ? (
        // render only the default address is not null
        <div key={defaultAddress.id} className="shipping-address">
          <Box>
            <p>{user.name}</p>
            <p>{defaultAddress.street}</p>
            <p>
              {defaultAddress.city}, {defaultAddress.state} {defaultAddress.zip}
            </p>
          </Box>
        </div>
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
                $ {product.price} x {product.quantity} qty
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
