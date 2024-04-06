import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Material UI Imports
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';

function ShoppingCartIconPage() {
  const history = useHistory();
  const cart = useSelector((store) => store.cart);

  const handleClick = () => {
    history.push('/cart');
    // console.log('navigate to Orders');
  };

  return (
    <>
      <Badge
        className="shoppingCartIcon"
        // TO-DO: Once completed the saga/reducer calls, can do item.length to get the total items added to the cart
        badgeContent={cart.length}
        color="primary"
        // anchorOrigin={{
        //   vertical: 'top',
        //   horizontal: 'right',
        // }}
      >
        <ShoppingCartOutlinedIcon
          className="shoppingCart"
          onClick={handleClick}
          fontSize="large"
        />
      </Badge>
    </>
  );
}

export default ShoppingCartIconPage;
