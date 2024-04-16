import { Button, IconButton } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch } from 'react-redux';
// import { useState } from 'react';
import './ShoppingCartItem.css';

function ShoppingCartItem({ item }) {
  const dispatch = useDispatch();
  // const [quantity, setQuantity] = useState(item.quantity);

  // const handleQuantityChange = (event, item) => {
  //   setQuantity(event.target.value);
  //   // console.log('');
  // };

  const handleUpButton = () => {
    if (item.quantity < 10) {
      // Limit quantity to not go over 10
      dispatch({
        type: 'UPDATE_CART_QUANTITY',
        payload: { id: item.id, quantity: item.quantity + 1 },
      });
    }
  };
  const handleDownButton = () => {
    if (item.quantity > 1) {
      // Limit quantity to start at 1
      dispatch({
        type: 'UPDATE_CART_QUANTITY',
        payload: { id: item.id, quantity: item.quantity - 1 },
      });
    }
  };

  const handleDeleteItem = (id) => {
    dispatch({
      type: 'DELETE_CART_ITEM',
      payload: id,
    });
  };

  return (
    <div key={item.id} className="selectedItems">
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Product</TableCell>
                <TableCell align="center">Product Name</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell>{''}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {cart.map((item) => ( */}
              <TableRow
                key={item.id}
                className="item-card"
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img src={item.img} className="item-image" />
                </TableCell>
                <TableCell align="center">{item.product_name}</TableCell>
                <TableCell align="center">$ {item.price}</TableCell>
                <TableCell>
                  x{' '}
                  <IconButton
                    size="small"
                    color="secondary"
                    onClick={handleDownButton}
                  >
                    <KeyboardArrowDownOutlinedIcon />
                  </IconButton>
                  {item.quantity} qty{' '}
                  <IconButton
                    size="small"
                    color="secondary"
                    onClick={handleUpButton}
                  >
                    <KeyboardArrowUpOutlinedIcon />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <Button
                    size="small"
                    variant="outlined"
                    type="button"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default ShoppingCartItem;
