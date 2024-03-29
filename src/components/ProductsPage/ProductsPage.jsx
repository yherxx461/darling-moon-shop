import React from 'react';
import { useHistory } from 'react-router-dom';

function ProductsPage() {
  const history = useHistory();

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
