// Material UI Imports
import { Button } from '@mui/material';

import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function ItemizedProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const item = useSelector((store) => store.details);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch({ type: 'FETCH_ITEM_DETAILS', payload: id });
  }, [id, dispatch]);

  const handleAddToCart = () => {
    // Dispatch action to add item to the cart
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: id,
        name: item.name,
        price: item.price,
        quantity: quantity,
      },
    });
    alert('Item added to cart!');
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity)) {
      setQuantity(newQuantity);
    }
  };

  return (
    <>
      <div className="itemizedProduct" key={item.id}>
        <img src={item.image_1} />
        <img src={item.image_2} />
        <img src={item.image_3} />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <label className="quantity">Qty:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <p>${item.price}</p>
        <Button
          size="small"
          variant="outlined"
          type="submit"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </div>
    </>
  );
}
export default ItemizedProduct;
