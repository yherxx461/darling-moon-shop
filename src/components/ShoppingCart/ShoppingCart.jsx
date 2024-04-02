// Material UI Imports
import { Card } from '@mui/material';
import { Button } from '@mui/material';

// Imports:
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function ShoppingCart({ item }) {
  // const [quantity, setQuantity] = useState('');
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  // useEffect(() => {
  //   // fetch cart items
  //   dispatch({
  //     type: 'FETCH_CART',
  //   });
  // }, [dispatch]);
  // console.log('console.log', cart);

  useEffect(() => {
    // Total price whenever item in cart changes
    let total = 0;
    cart.map((cartItem) => {
      total += cartItem.price * cartItem.quantity;
    });
    setTotalPrice(total);
  }, [cart]);

  const handleChange = (event, id) => {
    const newQuantity = parseInt(event.target.value);
    dispatch({
      type: 'UPDATE_QUANTITY_REQUEST',
      payload: { id: id, quantity: newQuantity },
    });
  };
  // setQuantity(parseInt(event.target.value));
  // console.log('update local state with quantity update');
  //   dispatch({
  //     type: 'UPDATE_QUANTITY_REQUEST',
  //     payload: { id: item.id, quantity: newQuantity },
  //   });
  // };

  const handleDeleteItem = (id) => {
    dispatch({
      type: 'DELETE_CART_ITEM',
      payload: id,
    });
  };

  const handleOrderCheckout = (id) => {
    console.log('in handleOrderCheckout');
  };
  return (
    <>
      <div>
        <h3>Shopping Cart</h3>
        {/* Mapping/fetching the item in the cart */}
        {cart.map((item) => (
          <Card key={item.id} className="selectedItems">
            <img src={item.image_1} alt="item-selected" />
            <p>{item.name}</p>
            Qty:
            <select
              name="quantity"
              value={item.quantity}
              onChange={(event) => handleChange(event, item.id)}
            >
              {/* Limiting quantity to 10 only */}
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}></option>
                //     {/* <option value="1">1</option>
                //   <option value="2">2</option>
                //   <option value="3">3</option>
                //   <option value="4">4</option>
                //   <option value="5">5</option>
                //   <option value="6">6</option>
                //   <option value="7">7</option>
                //   <option value="8">8</option>
                //   <option value="9">9</option>
                // <option value="10">10</option> */}
              ))}
            </select>
            <p>Price: ${item.price} || 0</p>
            <Button
              size="small"
              variant="outlined"
              type="delete"
              onClick={() => handleDeleteItem(item.id)}
            >
              Remove
            </Button>
          </Card>
        ))}
        <Card className="totalCost">
          {/* TO-DO: Total */}
          <p>Total: ${totalPrice}</p>
          {/* TO-DO: Order Checkout Button */}
          <Button
            size="small"
            variant="outlined"
            type="submit"
            onClick={handleOrderCheckout}
          >
            Order Checkout
          </Button>
        </Card>
      </div>
    </>
  );
}

export default ShoppingCart;
