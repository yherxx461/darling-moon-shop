import { useHistory } from 'react-router-dom';

// Material UI Imports
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';

// function ItemizedProduct({ item }) {
function ItemizedProduct(product) {
  const history = useHistory();
  const id = useParams;

  const handleClickToProduct = () => {
    history.push(`/products/${id}`);
  };

  // const handleAdd = () => {
  //   console.log('Add to Cart handle');
  // };
  return (
    <>
      <div className="itemizedProduct">
        <img
          src={product.image_url_1}
          alt={product.name}
          // onClick={() => handleClickToProduct(product.id)}
        />
        {/* /* Page Layout: 3 images, Title, Description, Quantity, Total, 'Add to
        Chart' Button */
        /*{' '} */}
        <img
          src={(product.image_url_1, product.image_url_2, product.image_url_3)}
        />{' '}
        <h3 type="text">{product.name}</h3>
        {/* <h3>{item.name}</h3> */}
        <p type="text">{product.description}</p>
        {/* <p>{item.description}</p> */}
        <p type="quantity">Qty: </p>
        {/* <p>{item.quantity}</p> */}
        <p type="price">{product.price}</p>
        {/* <p>{item.price}</p> */}
        <Button
          size="small"
          variant="outlined"
          type="submit"
          // onSubmit={handleAdd}
        >
          Add to Cart
        </Button>
      </div>
    </>
  );
}

export default ItemizedProduct;
