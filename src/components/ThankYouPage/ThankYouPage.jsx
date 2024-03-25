import { Button, Link } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import { useHistory } from 'react-router-dom';

function ThankYouPage() {
  // const history = useHistory();

  const handleClick = () => {
    console.log('in ThankYou handleClick');
  };

  return (
    <div className="thankyou-messages">
      <p>Your order has been placed! Thank you for your business.</p>
      <Button
        onClick={handleClick}
        size="small"
        variant="outlined"
        startIcon={<ArrowBackIosIcon />}
      >
        <Link to="/home">Back to Home</Link>
      </Button>{' '}
      <Button
        onClick={handleClick}
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
