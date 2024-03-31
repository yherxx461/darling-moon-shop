import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function ProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);

  useEffect(() => {
    // initial load  --> first load to load once
    dispatch({
      type: 'FETCH_PRODUCTS',
    });
  }, []);

  return (
    <div>
      Products
      {/* TO-DO: Need to do fetching of all the products in the inventory */}
      {products.map((product) => {
        return (
          <div>
            <p>{product.image_url_1}</p>
            <p>{product.image_url_2}</p>
            <p>{product.image_url_3}</p>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Quantity: #</p>
            <p>$ {product.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProductsPage;
