import { Button, Link } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
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
      <p>Your order has been placed! Thank you for your business.</p>
      <Button
        onClick={handleClickToHome}
        size="small"
        variant="outlined"
        startIcon={<ArrowBackIosIcon />}
      >
        <Link to="/home">Back to Home</Link>
      </Button>{' '}
      <Button
        onClick={handleClickToProducts}
        size="small"
        variant="outlined"
        endIcon={<ArrowForwardIosIcon />}
      >
        <Link to="/products">Continue Shopping</Link>
      </Button>
    </div>
  );
}

export default ThankYouPage;
