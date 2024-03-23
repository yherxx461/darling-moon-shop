import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function ThankYouPage() {
  return (
    <div className="thankyou-messages">
      <p>Your order has been placed! Thank you for your business.</p>
      <Button size="small" variant="outlined" startIcon={<ArrowBackIosIcon />}>
        Back to Home
      </Button>{' '}
      <Button size="small" variant="outlined" endIcon={<ArrowForwardIosIcon />}>
        Continue Shopping
      </Button>
    </div>
  );
}

export default ThankYouPage;
