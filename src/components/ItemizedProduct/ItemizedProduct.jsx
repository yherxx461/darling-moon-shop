// Material UI Imports
import { Button } from '@mui/material';

// function ItemizedProduct({ item }) {
function ItemizedProduct() {
  const handleAdd = () => {
    console.log('Add to Cart handle');
  };
  return (
    <>
      <div className="itemizedProduct">
        {/* Page Layout: 3 images, Title, Description, Quantity, Total, 'Add to Chart' Button */}
        {/* <img src={(item.image_url_1, item.image_url_2, item.image_url_3)} /> */}
        <h3 type="text">Item Name</h3>
        {/* <h3>{item.name}</h3> */}
        <p type="text">Description</p>
        {/* <p>{item.description}</p> */}
        <p type="quantity">Quantity</p>
        {/* <p>{item.quantity}</p> */}
        <p type="price">Price</p>
        {/* <p>{item.price}</p> */}
        <Button
          size="small"
          variant="outlined"
          type="submit"
          onSubmit={handleAdd}
        >
          Add to Cart
        </Button>
      </div>
    </>
  );
}

export default ItemizedProduct;
