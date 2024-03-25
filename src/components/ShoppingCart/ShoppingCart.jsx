// Material UI Imports
import { Card } from '@mui/material';
import { Button } from '@mui/material';
// Component Imports:
// import ItemizedProduct from "../ItemizedProduct/ItemizedProduct"

function ShoppingCart() {
  const handleDeleteItem = () => {
    console.log('in handleDeleteItem');
  };

  const handleChange = () => {
    console.log;
  };

  const handleOrderCheckout = () => {
    console.log('in handleOrderCheckout');
  };
  return (
    <>
      <div>
        <h3>Shopping Cart</h3>
        <Card className="selectedItems">
          {/* TO-DO: Map "Add to Cart" items and listed out the following: */}
          {/* Selected Item will display image_url_1, name, quantity, $ price, and a remove button */}
          <p>image_url_1</p>
          <p>Product Name</p>
          {/* <label for="quanity">Quantity: </label> */}
          Quantity:{' '}
          <input
            list="quantity"
            placeholder="Quanity"
            min="1"
            max="10"
            // onChange={handleChange}
          />
          <datalist id="quantity">
            <option value="1" />
            <option value="2" />
            <option value="3" />
            <option value="4" />
            <option value="5" />
            <option value="6" />
            <option value="7" />
            <option value="8" />
            <option value="9" />
            <option value="10" />
          </datalist>
          <p>Price: $##.##</p>
          <Button
            size="small"
            variant="outlined"
            type="delete"
            onClick={handleDeleteItem}
          >
            Remove
          </Button>
        </Card>
        <Card className="totalCost">
          {/* TO-DO: Total */}
          <p>Total: $ price</p>
          {/* TO-DO: Order Checkout Button */}
          <Button
            size="small"
            variant="outlined"
            type="submit"
            onClick={handleOrderCheckout}
          >
            Order Checkout
          </Button>
        </Card>
      </div>
    </>
  );
}

export default ShoppingCart;
