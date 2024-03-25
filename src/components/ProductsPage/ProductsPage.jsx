import React from 'react';
import { useHistory } from 'react-router-dom';

function ProductsPage() {
  const handleClick = () => {
    history.push('/products');
    console.log('in handleClick navigation to Itemized Product');
  };
  return (
    <div>
      <center>
        <button type="button" className="btn btn_asLink" onClick={handleClick}>
          Products
        </button>
      </center>
    </div>
  );
}

export default ProductsPage;
