import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function ProductsPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);

  useEffect(() => {
    // initial load  --> first load to load once
    dispatch({
      type: 'FETCH_PRODUCTS',
    });
  });

  const handleClick = () => {
    history.push('/products');
    console.log('in handleClick navigation to Itemized Product');
  };
  return (
    <div>
      <button type="button" className="btn btn_asLink" onClick={handleClick}>
        Products
        {/* TO-DO: Need to do fetching of all the products in the inventory */}
        {/* TO-DO: MAP THE PRODUCTS OUT */}
      </button>
    </div>
  );
}

export default ProductsPage;
