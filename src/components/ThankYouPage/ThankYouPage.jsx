import { Button, Link, Box } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './ThankYouPage.css';
// import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ThankYouPage() {
  const history = useHistory();

  const handleClickToProducts = () => {
    history.push('/products');
    console.log('in handleClick navigation to ProductsPage');
  };

  const handleClickToHome = () => {
    history.push('/home');
    console.log('in ThankYou handleClicToHome');
  };

  return (
    <div className="thankyou-messages">
      <Box justifyContent="center" textAlign="center" margin="25%">
        <p>Your order has been placed! Thank you for your business.</p>
        <Link to="/home">
          <Button
            onClick={handleClickToHome}
            size="small"
            variant="outlined"
            startIcon={<ArrowBackIosIcon />}
          >
            Back to Home
          </Button>
        </Link>{' '}
        <Link to="/products">
          <Button
            onClick={handleClickToProducts}
            size="small"
            variant="outlined"
            endIcon={<ArrowForwardIosIcon />}
          >
            Continue Shopping
          </Button>
        </Link>
      </Box>
    </div>
  );
}

export default ThankYouPage;
