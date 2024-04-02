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
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);
  const history = useHistory();

  useEffect(() => {
    // initial load  --> first load to load once
    dispatch({
      type: 'FETCH_PRODUCTS',
    });
  }, []);

  const handleClickToItemizedProduct = (id) => {
    history.push(`/products/${id}`);
  };

  return (
    <div className="productImages">
      <Grid container spacing={2}>
        {/* <div className="productImages" key={products.id}> */}
        {/* TO-DO: Need to do fetching of all the products in the inventory */}
        {products.map((product) => {
          return (
            <Grid key={product.id} item xs={12} md={4} lg={4}>
              <Box sx={{ flexGrow: 1 }}>
                <Card
                  sx={{ maxWidth: 250 }}
                  variant="outlined"
                  className="container"
                  justifyContent="center"
                  onClick={() => handleClickToItemizedProduct(product.id)}
                >
                  <img
                    src={product.image_1}
                    className="productImage"
                    width={250}
                    height={250}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="p" component="div">
                      <h3>{product.name}</h3>
                    </Typography>
                    <p>$ {product.price}</p>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default ProductsPage;
