import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

// Material UI Imports
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import './HomePage.css';

function HomePage() {
  const featured = useSelector((store) => store.featured);
  const dispatch = useDispatch();
  const id = useParams();
  const history = useHistory();

  useEffect(() => {
    // initial load of featured items
    dispatch({
      type: 'FETCH_FEATURED_ITEMS',
    });
  }, [dispatch]);

  const handleClickToItemizedProduct = (id) => {
    history.push(`/products/${id}`);
  };

  return (
    <div>
      <h1 className="home-title" justifyContent="center">
        Featured Keychains
      </h1>
      <Grid justifyContent="center" container spacing={2}>
        {featured.map((featuredItem) => {
          return (
            <Grid
              key={featuredItem.id}
              item
              xs={8}
              md={3}
              lg={3}
              justifyContent="center"
            >
              <Card
                sx={{ maxWidth: 325 }}
                variant="outlined"
                className="container"
                onClick={() => handleClickToItemizedProduct(featuredItem.id)}
              >
                <img src={featuredItem.image_1} className="productImage" />
                <h3>{featuredItem.name}</h3>
                <p>$ {featuredItem.price}</p>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default HomePage;
