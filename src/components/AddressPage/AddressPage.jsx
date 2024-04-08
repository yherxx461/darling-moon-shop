import { Button, Link } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './AddressPage.css';

function AddressPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const address = useSelector((store) => store.address);
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

    if (newAddress.isDefault) {
      // Find the previous default address
      const previousDefault = address.find(
        (addressItem) => addressItem.isDefault
      );
      if (previousDefault && newAddress.isDefault) {
        // Dispatch action to update the previous default address
        dispatch({
          type: 'UPDATE_ADDRESS',
          payload: { ...previousDefault, isDefault: false },
        });
      }
    }

    // Set the "isDefault" value to boolean true or false before dispatching
    dispatch({
      type: 'ADD_ADDRESS',
      payload: { ...newAddress, isDefault: newAddress.isDefault },
    });
    setNewAddress({
      street: '',
      city: '',
      state: '',
      zip: '',
      isDefault: newAddress.isDefault,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const checked =
      // default to newAddress.isDefault if not a checkbox ==> false;
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
    dispatch({ type: 'SET_DEFAULT_ADDRESS', payload: id });
  };

  return (
    <>
      <div>
        <ul>
          <li>
            <Link
              className="nav-link"
              to="/account"
              onClick={handleClickAccount}
            >
              Account
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to="/address"
              onClick={handleClickAddress}
            >
              Addresses
            </Link>
          </li>
        </ul>
      </div>
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
        <br></br>
        <input
          type="checkbox"
          className="set-default"
          name="isDefault"
          checked={newAddress.isDefault}
          onChange={handleChange}
        />
        Set as default address
        <br></br>
        <Button type="submit" variant="outlined" size="small">
          Confirm
        </Button>
      </form>
      <div key={address.id}>
        <h3>Saved Addresses</h3>
        {/* <div className="saved-addresses" key={address.id}> */}
        {address.map((addressItem) => (
          <div key={addressItem.id}>
            <p>{addressItem.isDefault ? 'default' : 'not default'}</p>
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
        ))}{' '}
        {/* </div> */}
      </div>
    </>
  );
}
export default AddressPage;
