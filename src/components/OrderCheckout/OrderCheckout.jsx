import { Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

// imports

function OrderCheckout() {
  const user = useSelector((store) => store.user);
  const address = useSelector((store) => store.address);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>Order Checkout</h1>
      </div>
      <div>
        <p>Ship to Address:</p>
      </div>
      <div className="shipping-address">
        <Box>
          <p>{user.name}</p>
          <p>{address.street}</p>
          <p>
            {address.city}, {address.state} {address.zip}
          </p>
        </Box>
      </div>
    </>
  );
}

export default OrderCheckout;
