// Material UI Imports
import { Card } from '@mui/material';
import { Button } from '@mui/material';
// Component Imports:
// import ItemizedProduct from "../ItemizedProduct/ItemizedProduct"

function ShoppingCart() {
  const [quantity, setQuantityValue] = [];
  const handleDeleteItem = () => {
    console.log('in handleDeleteItem');
  };

  const handleChange = (event) => {
    event.target.value();
    console.log('update handleChange for quantity');
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
          Qty: {quantity}{' '}
          <select
            name="select-opt"
            id="select-opt"
            defaultValue={1}
            onChange={(event) => handleChange}
            // value={setQuantityValue}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
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

// MenuItem Input from Material UI
// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const names = [
//   'Oliver Hansen',
//   'Van Henry',
//   'April Tucker',
//   'Ralph Hubbard',
//   'Omar Alexander',
//   'Carlos Abbott',
//   'Miriam Wagner',
//   'Bradley Wilkerson',
//   'Virginia Andrews',
//   'Kelly Snyder',
// ];

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

// export default function MultipleSelect() {
//   const theme = useTheme();
//   const [personName, setPersonName] = React.useState([]);

//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setPersonName(
//       // On autofill we get a stringified value.
//       typeof value === 'string' ? value.split(',') : value,
//     );
//   };

//   return (
//     <div>
//       <FormControl sx={{ m: 1, width: 300 }}>
//         <InputLabel id="demo-multiple-name-label">Name</InputLabel>
//         <Select
//           labelId="demo-multiple-name-label"
//           id="demo-multiple-name"
//           multiple
//           value={personName}
//           onChange={handleChange}
//           input={<OutlinedInput label="Name" />}
//           MenuProps={MenuProps}
//         >
//           {names.map((name) => (
//             <MenuItem
//               key={name}
//               value={name}
//               style={getStyles(name, personName, theme)}
//             >
//               {name}
