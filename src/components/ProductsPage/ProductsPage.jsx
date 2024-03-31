import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useParams } from 'react';

// import ItemizedProduct from '../ItemizedProduct/ItemizedProduct';

function ProductsPage() {
  const id = useParams();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);

  useEffect(() => {
    // initial load  --> first load to load once
    dispatch({
      type: 'FETCH_PRODUCTS',
    });
  }, []);

  return (
    <div className="productImages" key={id}>
      {/* TO-DO: Need to do fetching of all the products in the inventory */}
      {products.map((product) => {
        return (
          <div>
            <img src={product.image_url_1} />
            {/* <ItemizedProduct product={product} /> */}
          </div>
        );
      })}
    </div>
  );
}

export default ProductsPage;
