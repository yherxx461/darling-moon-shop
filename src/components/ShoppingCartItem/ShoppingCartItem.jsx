import { Button, IconButton } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { useDispatch } from 'react-redux';
// import { useState } from 'react';

function ShoppingCartItem({ item }) {
  const dispatch = useDispatch();
  // const [quantity, setQuantity] = useState(item.quantity);

  // const handleQuantityChange = (event, item) => {
  //   setQuantity(event.target.value);
  //   // console.log('');
  // };

  const handleUpButton = () => {
    if (item.quantity < 10) {
      // Limit quantity to not go over 10
      dispatch({
        type: 'UPDATE_CART_QUANTITY',
        payload: { id: item.id, quantity: item.quantity + 1 },
      });
    }
  };
  const handleDownButton = () => {
    if (item.quantity > 1) {
      // Limit quantity to start at 1
      dispatch({
        type: 'UPDATE_CART_QUANTITY',
        payload: { id: item.id, quantity: item.quantity - 1 },
      });
    }
  };

  const handleDeleteItem = (id) => {
    dispatch({
      type: 'DELETE_CART_ITEM',
      payload: id,
    });
  };

  return (
    <div key={item.id} className="selectedItems">
      <img src={item.img} />
      <p>{item.product_name}</p>
      <p>
        $ {item.price} x{' '}
        <IconButton size="small" color="secondary" onClick={handleDownButton}>
          <KeyboardArrowDownOutlinedIcon />
        </IconButton>
        {item.quantity}{' '}
        <IconButton size="small" color="secondary" onClick={handleUpButton}>
          <KeyboardArrowUpOutlinedIcon />
        </IconButton>
        qty
      </p>
      {/* <TextField
        type="number"
        label="Quantity"
        size="small"
        sx={{ width: '70px' }}
        value={quantity}
        onChange={(event) => handleQuantityChange(event, item)}
      /> */}
      <Button
        size="small"
        variant="outlined"
        type="button"
        onClick={() => handleDeleteItem(item.id)}
      >
        Remove
      </Button>
    </div>
  );
}

export default ShoppingCartItem;