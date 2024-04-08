import { Box, Link } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import './OrderCheckout.css';
// imports

function OrderCheckout() {
  const user = useSelector((store) => store.user);
  const addresses = useSelector((store) => store.address);
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    // Dispatch an action to fetch products when the component mounts
    dispatch({ type: 'FETCH_CART' });
    dispatch({ type: 'FETCH_ADDRESS' });
  }, [dispatch]);

  const handleSubmitOrderCheckout = () => {
    // Dispatch action to clear cart
    dispatch({ type: 'CLEAR_CART' });
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
          <p>Orders</p>
          {cart.map((product) => (
            <div key={product.id}>
              <img src={product.img} />
              <p>{product.product_name}</p>
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
