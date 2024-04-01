import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// Material UI Imports
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

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
      {/* <div className="productImages" key={products.id}> */}

      {/* TO-DO: Need to do fetching of all the products in the inventory */}
      {products.map((product) => {
        return (
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Card
                sx={{ maxWidth: 250 }}
                variant="outlined"
                className="container"
              >
                <img src={product.image_1} />
                <CardContent>
                  <Typography gutterBottom variant="p" component="div">
                    {product.name}
                  </Typography>
                  <p>{product.price}</p>
                </CardContent>
              </Card>
            </Grid>
          </Box>
        );
      })}
    </div>
  );
}

export default ProductsPage;
