import { Box, Link } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import './OrderCheckout.css';
// imports

function OrderCheckout() {
  const user = useSelector((store) => store.user);
  const address = useSelector((store) => store.address);
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    // Dispatch an action to fetch products when the component mounts
    dispatch({ type: 'FETCH_CART' });
  }, [dispatch]);

  const handleSubmitOrderCheckout = () => {
    history.push('/order-confirmation');
  };

  return (
    <>
      <div>
        <h1>Order Checkout</h1>
      </div>
      <div>
        <button onClick={handleSubmitOrderCheckout}>
          <Link to="/order-confirmation">Order Checkout</Link>
        </button>
      </div>
      <div>
        <p className="page-title">Ship To:</p>
      </div>
      <div className="shipping-address">
        <Box>
          <p>{user.name}</p>
          <p>{address.street}1234 Main Street</p>
          <p>New York, New York 10044</p>
        </Box>
      </div>
      <div>
        <Box className="item-list">
          <p>Orders</p>
          {cart.map((product) => (
            <div key={product.id}>
              <img src={product.image_1} />
              <p>Product Name</p>
              <p>
                $ {product.price.toFixed(2)} x {product.quantity}
              </p>
              <p></p>
            </div>
          ))}
        </Box>
      </div>
    </>
  );
}

export default OrderCheckout;
