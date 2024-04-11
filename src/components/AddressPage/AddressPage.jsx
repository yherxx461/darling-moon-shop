import {
  Button,
  Link,
  Box,
  Card,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './AddressPage.css';

function AddressPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const addresses = useSelector((store) => store.address);
  const [newAddress, setNewAddress] = useState({
    street: '',
    city: '',
    state: '',
    zip: '',
    isDefault: false,
  });
  useEffect(() => {
    // Fetch address on initial load
    dispatch({ type: 'FETCH_ADDRESS' });
  }, [dispatch]);

  const handleClickAddress = () => {
    history.push('/address');
  };

  const handleClickAccount = () => {
    history.push('/account');
  };

  const handleSubmitAddress = (event) => {
    event.preventDefault();
    // Dispatch action to add new address
    dispatch({
      type: 'ADD_ADDRESS',
      payload: { ...newAddress, isDefault: newAddress.isDefault },
    });
    // Reset fields
    setNewAddress({
      street: '',
      city: '',
      state: '',
      zip: '',
      isDefault: false,
    });
  };

  // Filter default address
  const defaultAddress = addresses.find((address) => address.isDefault);
  // Fetch address again after defaultAddress changes
  useEffect(() => {
    dispatch({ type: 'FETCH_ADDRESS' });
  }, [dispatch, defaultAddress]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const checked =
      // Set address status 'default' if the checkbox is checked, otherwise, 'not default' if unchecked
      event.target.type === 'checkbox'
        ? event.target.checked
        : newAddress.isDefault;
    setNewAddress((prevAddress) => ({
      ...prevAddress,
      [name]: name === 'isDefault' ? checked : value,
    }));
  };

  const handleDeleteAddress = (id) => {
    dispatch({ type: 'DELETE_ADDRESS', payload: id });
  };

  const handleSetDefaultAddress = (id) => {
    // event.preventDefault();
    //hardcode test ID
    // const addressId = 180;
    dispatch({
      type: 'SET_DEFAULT_ADDRESS',
      payload: id,
    });
  };

  return (
    <>
      <div>
        <div className="sidebar">
          <ul>
            <li>
              <Link to="/account" onClick={handleClickAccount}>
                <IconButton>
                  <Typography color="black">Account</Typography>
                </IconButton>
              </Link>
            </li>
            <li>
              <Link to="/address" onClick={handleClickAddress}>
                <IconButton>
                  <Typography color="black">Addresses</Typography>
                </IconButton>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Grid
        justifyContent="center"
        style={{ justifyContent: 'center', marginLeft: '50em' }}
      >
        <h3>Add New Address</h3>
        <form className="address-form" onSubmit={handleSubmitAddress}>
          <br></br>
          <input
            type="text"
            className="street"
            placeholder="Street"
            name="street"
            value={newAddress.street}
            onChange={handleChange}
          />
          <br></br>
          <input
            type="text"
            className="city"
            placeholder="City"
            name="city"
            value={newAddress.city}
            onChange={handleChange}
          />
          <br></br>
          <input
            type="text"
            className="state"
            placeholder="State"
            name="state"
            value={newAddress.state}
            onChange={handleChange}
          />
          <br></br>
          <input
            type="text"
            className="zip"
            placeholder="Zip"
            name="zip"
            value={newAddress.zip}
            onChange={handleChange}
          />
          <input
            type="checkbox"
            className="set-default"
            name="isDefault"
            checked={newAddress.is_default}
            onChange={handleChange}
          />{' '}
          {''}Set as default address
          <Button type="submit" variant="outlined" size="small">
            Confirm
          </Button>
        </form>
      </Grid>
      <div justifyContent="center">
        <h3 justifyContent="center">Saved Addresses</h3>
        {/* <div className="saved-addresses" key={address.id}> */}
        <Grid
          container
          spacing={0}
          style={{
            color: 'lavender',
            margin: '4px',
            // justifyContent: 'center',
            display: '-ms-flexbox',
            marginLeft: '2em',
          }}
        >
          <Box spacing={2}>
            <Card>
              <div className="address-container">
                {addresses.map((addressItem) => (
                  <div key={addressItem.id}>
                    <p>{addressItem.is_default ? 'default' : 'not default'}</p>
                    <p>{addressItem.street}</p>
                    <p>
                      {addressItem.city}, {addressItem.state} {addressItem.zip}
                    </p>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleDeleteAddress(addressItem.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleSetDefaultAddress(addressItem.id)}
                    >
                      Set as Default
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </Box>
        </Grid>
      </div>
    </>
  );
}
export default AddressPage;
