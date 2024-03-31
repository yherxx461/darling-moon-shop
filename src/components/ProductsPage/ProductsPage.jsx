import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// Material UI Imports
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

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
    <div className="productImages">
      {/* TO-DO: Need to do fetching of all the products in the inventory */}
      {products.map((product) => {
        return (
          <Grid>
            <Card
              sx={{ maxWidth: 250 }}
              variant="outlined"
              className="container"
            >
              <div>
                <img src={product.image_1} />
                <CardContent>
                  <Typography gutterBottom variant="p" component="div">
                    {product.name} {'     '} {product.price}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </Grid>
        );
      })}
    </div>
  );
}

export default ProductsPage;
