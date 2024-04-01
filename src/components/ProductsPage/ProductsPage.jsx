import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Material UI Imports
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';

function ProductsPage() {
  const id = useParams();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);
  const history = useHistory();

  useEffect(() => {
    // initial load  --> first load to load once
    dispatch({
      type: 'FETCH_PRODUCTS',
    });
  }, []);

  const handleClickToItemizedProduct = () => {
    history.push(`/products/${id}`);
  };

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
                <img
                  src={product.image_1}
                  className="productImage"
                  onClick={handleClickToItemizedProduct}
                />
                <CardContent>
                  <Typography gutterBottom variant="h" component="div">
                    <h3>{product.name}</h3>
                  </Typography>
                  <p>$ {product.price}</p>
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
