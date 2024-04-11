import { Box, Link, Button, Snackbar, Alert } from '@mui/material';
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
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

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
    const defaultAddress = addresses.find((address) => address.is_default);
    setDefaultAddress(defaultAddress);
  }, [addresses]);

  const handlePlaceOrder = () => {
    if (!defaultAddress) {
      // alert('Please select an address before placing the order.');
      return;
    }
    // Capture current date and time:
    const orderDetails = {
      order_date: new Date().toISOString(),
      address_id: defaultAddress.id,
    };
    // Dispatch action to clear cart
    dispatch({ type: 'SUBMIT_ORDER_REQUEST', payload: orderDetails });
    dispatch({ type: 'CLEAR_CART' });
    history.push('/order-confirmation');
    setSnackbarMessage('Order placed successfully');
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    // Closes the message
    setSnackbarOpen(false);
  };

  return (
    <>
      <Box margin="2em" display={'flex'} justifyContent={'space-between'}>
        <Box width="70%">
          <div>
            <h1 className="order-title" justifyContent="center">
              Order Checkout
            </h1>
          </div>
          <div>
            <h2 className="page-title">Ship To:</h2>
          </div>
          <div
            className="address-container"
            style={{ display: 'flex', justifyContent: 'flex-start' }}
          >
            {defaultAddress ? (
              // render only the default address is not null
              <div key={defaultAddress.id} className="shipping-address">
                <Box>
                  <p style={{ justifyContent: 'flex-start' }}>{user.name}</p>
                  <p style={{ justifyContent: 'flex-start' }}>
                    {defaultAddress.street}
                  </p>
                  <p style={{ justifyContent: 'flex-start' }}>
                    {defaultAddress.city}, {defaultAddress.state}{' '}
                    {defaultAddress.zip}
                  </p>
                </Box>
              </div>
            ) : (
              <p>No address found</p>
            )}
          </div>
          <div>
            <h2>Orders</h2>
            {cart.map((product) => (
              <Box
                className="item-list"
                style={{ flexDirection: 'column', display: 'flex' }}
              >
                <div
                  key={product.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1em',
                    flexDirection: 'column',
                  }}
                >
                  {/* <div style={{ marginRight: '1em' }}> */}
                  <img src={product.img} />
                  {/* <div style={{ marginLeft: '1em' }}> */}
                  <h3 style={{ marginLeft: '1em' }}>{product.product_name}</h3>
                  <p style={{ marginLeft: '1em' }}>
                    $ {product.price} x {product.quantity} qty
                  </p>
                </div>
              </Box>
            ))}
          </div>
        </Box>
        <Box width="30%">
          <div className="total-container">
            Total: ${totalPrice.toFixed(2)}
            <br></br>
            <Link to="/order-confirmation">
              <Button
                variant="outlined"
                size="small"
                onClick={handlePlaceOrder}
              >
                Place Order
              </Button>
            </Link>
          </div>
        </Box>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert severity="success" onClose={handleCloseSnackbar}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}

export default OrderCheckout;
