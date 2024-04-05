import { Button, Link } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

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

  const handleClickAddress = () => {
    history.push('/address');
  };

  const handleClickAccount = () => {
    history.push('/account');
  };

  const handleSubmitAddress = (event) => {
    event.preventDefault();
    dispatch({ type: 'ADD_ADDRESS', payload: newAddress });
    // clear up fields
    setNewAddress({
      street: '',
      city: '',
      state: '',
      zip: '',
      isDefault: false,
    });
    setNewAddress('');
  };
  useEffect(() => {
    //initial load --> load once
    dispatch({ type: 'FETCH_ADDRESS' });
  }, []);

  const handleChange = (event) => {
    const updatedAddress = event.target;
    setNewAddress(updatedAddress);
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
      <h3>Addresses</h3>
      <form className="address-form" onSubmit={handleSubmitAddress}>
        <br></br>
        <input
          type="text"
          className="street"
          placeholder="Street"
          value={newAddress.street}
          onChange={handleChange}
        />
        <br></br>
        <input
          type="text"
          className="city"
          placeholder="City"
          value={newAddress.city}
          onChange={handleChange}
        />
        <br></br>
        <input
          type="text"
          className="state"
          placeholder="State"
          value={newAddress.state}
          onChange={handleChange}
        />
        <br></br>
        <input
          type="text"
          className="zip"
          placeholder="Zip"
          value={newAddress.zip}
          onChange={handleChange}
        />
        <br></br>
        <input
          type="checkbox"
          className="set-default"
          checked={newAddress.isDefault}
          onChange={handleChange}
        />
        Set as default address
        <br></br>
        <Button variant="outlined" size="small">
          Confirm
        </Button>
      </form>
      <>
        <h3>Saved Addresses</h3>
        {address.map((addressItem) => (
          <div key={addressItem.id}>
            <p>{addressItem.street}</p>
            <p>
              {addressItem.city}, {addressItem.state} {addressItem.zip}
            </p>
          </div>
        ))}{' '}
        ;
      </>
    </>
  );
}

export default AddressPage;
