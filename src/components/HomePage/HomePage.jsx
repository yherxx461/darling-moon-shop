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
      <h2 className="container">Featured Items</h2>
      <Grid container spacing={2}>
        {featured.map((featuredItem) => {
          return (
            <Grid key={featuredItem.id} item xs={12} md={4} lg={4}>
              <Card
                sx={{ maxWidth: 250 }}
                variant="outlined"
                className="container"
                onClick={() => handleClickToItemizedProduct(featuredItem.id)}
              >
                <img src={featuredItem.image_1} className="productImage" />
                <p>{featuredItem.name}</p>
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
