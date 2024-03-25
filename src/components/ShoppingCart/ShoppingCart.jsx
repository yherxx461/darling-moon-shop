// Material UI Imports
// import { Card } from "@mui/material";
// import Button from "@mui/material";

// Component Imports:
import { Button } from '@mui/material';
// import ItemizedProduct from "../ItemizedProduct/ItemizedProduct"

function ShoppingCart({ ItemizedProduct }) {
  return (
    <>
      <div>
        <h3>Shopping Cart</h3>
        {/* TO-DO: Map "Add to Cart" items and listed out the following: */}
        {/* TO-DO: Total */}
        <p>Total: $ price</p>
        {/* TO-DO: Order Checkout Button */}
        <Button type="submit" onClick={handleOrderCheckout}>
          Order Checkout
        </Button>
      </div>
    </>
  );
}
