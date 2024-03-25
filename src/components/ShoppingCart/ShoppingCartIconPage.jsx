import { useHistory } from 'react-router-dom';

// Material UI Imports
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';

function ShoppingCartIconPage() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/shoppingCart');
    // console.log('navigate to Orders');
  };

  return (
    <>
      <Badge
        className="shoppingCartIcon"
        badgeContent={4}
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
