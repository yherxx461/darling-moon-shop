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
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');
  // const asdf

  useEffect(() => {
    dispatch({ type: 'FETCH_ITEM_DETAILS', payload: id });
  }, [id, dispatch]);

  return (
    <>
      <div className="itemizedProduct">
        {/* /* Page Layout: 3 images, Title, Description, Quantity, Total, 'Add to
        Chart' Button */
        /*{' '} */}
        <img src={(item.image_1, item.image_2, item.image_3)} />{' '}
        <h3 type="text">{item.name}</h3>
        {/* <h3>{item.name}</h3> */}
        <p type="text">{item.description}</p>
        {/* <p>{item.description}</p> */}
        <p type="quantity">Qty: </p>
        {/* <p>{item.quantity}</p> */}
        <p type="price">{item.price}</p>
        {/* <p>{item.price}</p> */}
        <Button
          size="small"
          variant="outlined"
          type="submit"
          // onSubmit={handleAdd}
        >
          Add to Cart
        </Button>
      </div>
    </>
  );
}

export default ItemizedProduct;
