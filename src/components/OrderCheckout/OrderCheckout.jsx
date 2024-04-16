// import {Snackbar, Alert } from '@mui/material';
import { Link, Button, TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './OrderCheckout.css';
// import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem';

function OrderCheckout() {
  const user = useSelector((store) => store.user);
  const addresses = useSelector((store) => store.address);
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const history = useHistory();
  // const [snackbarOpen, setSnackbarOpen] = useState(false);
  // const [snackbarMessage, setSnackbarMessage] = useState('');

  const [totalPrice, setTotalPrice] = useState(0);
  const [defaultAddress, setDefaultAddress] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedAddress, setEditedAddress] = useState({});

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

  const handleEditAddress = () => {
    setEditedAddress(defaultAddress);
    setEditMode(true);
  };
  const handleSaveAddress = () => {
    // dispatch action to update address in redux
    dispatch({ type: 'UPDATE_ADDRESS', payload: editedAddress });
    setEditMode(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedAddress({ ...editedAddress, [name]: value });
  };

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
    // setSnackbarMessage('Order placed successfully');
    // setSnackbarOpen(true);
  };

  // const handleCloseSnackbar = () => {
  //   // Closes the message
  //   setSnackbarOpen(false);
  // };
  return (
    <>
      <h1 className="order-title">Order Checkout</h1>
      <div className="checkout-cart-sidebar">
        <p>Total: ${totalPrice.toFixed(2)}</p>
        <p>
          <Link to="/order-confirmation">
            <Button
              className="btn"
              variant="outlined"
              size="small"
              onClick={handlePlaceOrder}
            >
              Place Order
            </Button>
          </Link>
        </p>
      </div>
      <h2 className="ship-to-title">Ship To:</h2>
      <div className="address-container">
        {defaultAddress && ! editMode && (
          // Render input fields for editing
          <div className="shipping-address">
            <TextField
              name="name"
              label="Name"
              size="small"
              className="edit-address-field"
              value={editedAddress.name}
              onChange={handleInputChange}
            />
            <br></br>
            <TextField
              name="street"
              label="Street"
              size="small"
              className="edit-address-field"
              value={editedAddress.street}
              onChange={handleInputChange}
            />
            <br></br>

            <TextField
              name="city"
              label="City"
              size="small"
              className="edit-address-field"
              value={editedAddress.city}
              onChange={handleInputChange}
            />
            <br></br>

            <TextField
              name="zip"
              label="Zip"
              size="small"
              className="edit-address-field"
              value={editedAddress.zip}
              onChange={handleInputChange}
            />
            <br></br>

            {/* Add other address fields as needed */}
            <Button variant="contained" onClick={handleSaveAddress}>
              Save
            </Button>
          </div>
        ) : defaultAddress ? (
          // render only the default address
          <div key={defaultAddress.id} className="shipping-address">
            <div>
              <p>{user.name}</p>
              <p>{defaultAddress.street}</p>
              <p>
                {defaultAddress.city}, {defaultAddress.state}{' '}
                {defaultAddress.zip}
              </p>
            </div>
            <Button variant="outlined" size="small" onClick={handleEditAddress}>
              Edit
            </Button>
          </div>
        ) : (
          <p>No address found</p>
        )}
      </div>
      <h2 className="orders">Orders</h2>
      {cart.map((item) => (
        <TableContainer
          key={item.id}
          className="order-container"
          component={Paper}
          sx={{ maxWidth: 1000 }}
        >
          <Table sx={{ maxWidth: 1000 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" style={{ width: '33%' }}>
                  Product
                </TableCell>
                <TableCell align="center" style={{ width: '33%' }}>
                  Product Name
                </TableCell>
                <TableCell align="center" style={{ width: '33%' }}>
                  Quantity
                </TableCell>
                <TableCell>{''}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {cart.map((item) => ( */}
              <TableRow
                key={item.id}
                className="item-card"
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                  style={{ width: '33%' }}
                >
                  <img src={item.img} className="item-image" />
                </TableCell>
                <TableCell align="center" style={{ width: '33%' }}>
                  {item.product_name}
                </TableCell>
                <TableCell align="center" style={{ width: '33%' }}>
                  {item.quantity} qty
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ))}
      {/* <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert severity="success" onClose={handleCloseSnackbar}>
          {snackbarMessage}
        </Alert>
      </Snackbar> */}
    </>
  );
}

export default OrderCheckout;
