import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

function ProductsPage() {
  const history = useHistory();

  return (
    <div>
      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/products');
          }}
        >
          Products
        </button>
      </center>
    </div>
  );
}

export default ProductsPage;
