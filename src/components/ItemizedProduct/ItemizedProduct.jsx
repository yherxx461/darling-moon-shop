// Material UI Imports
import { Button, Snackbar, Alert } from '@mui/material';

import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './itemizedProduct.css';

function ItemizedProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const item = useSelector((store) => store.details);
  const [quantity, setQuantity] = useState(1);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    dispatch({ type: 'FETCH_ITEM_DETAILS', payload: id });
  }, [id, dispatch]);

  const handleAddToCart = () => {
    // Dispatch action to add item to the cart
    console.log('adding item to cart', id, item.name, item.price, quantity);
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        address_id: item.address_id,
        quantity: quantity,
        product_id: id,
        order_id: null,
      },
    });
    setSnackbarMessage(`${item.name} added to cart`);
    setSnackbarOpen(true);
  };

  const handleChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleCloseSnackbar = () => {
    // Closes the message
    setSnackbarOpen(false);
  };

  return (
    <>
      <div className="container" key={item.id}>
        <div className="images">
          <img src={item.image_1} />
          <img src={item.image_2} />
          <img src={item.image_3} />
        </div>
        <div className="details">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <label className="quantity">Qty: {item.quantity}</label>
          <input
            type="number"
            id="quantity"
            min={1}
            max={10}
            value={quantity}
            onChange={handleChange}
          />
          <p>$ {item.price}</p>
          <Button
            size="small"
            variant="outlined"
            type="submit"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
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
export default ItemizedProduct;
