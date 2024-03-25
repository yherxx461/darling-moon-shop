import { Button, Link } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function ThankYouPage() {
  const handleClick = () => {
    console.log('in handleClick');
  };

  return (
    <div className="thankyou-messages">
      <p>Your order has been placed! Thank you for your business.</p>
      <Link to="/home">
        <Button
          onClick={handleClick}
          size="small"
          variant="outlined"
          startIcon={<ArrowBackIosIcon />}
        >
          Back to Home
        </Button>
      </Link>{' '}
      <Link to="/products">
        <Button
          onClick={handleClick}
          size="small"
          variant="outlined"
          endIcon={<ArrowForwardIosIcon />}
        >
          Continue Shopping
        </Button>
      </Link>
    </div>
  );
}

export default ThankYouPage;
