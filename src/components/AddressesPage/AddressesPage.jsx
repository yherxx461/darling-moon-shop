import { Button, Link } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function AddressesPage() {
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
    //initial load --> load once
    dispatch({ type: 'FETCH_ADDRESS' });
  }, []);

  const handClickAddress = () => {
    history.push('/address');
  };

  const handleClickAccount = () => {
    history.push('/account');
  };

  const handleSubmitAddress = (event) => {
    event.preventDefault();
    dispatch({ type: 'ADD_ADDRESS', payload: newAddress });
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setNewAddress();
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
            <Link className="nav-link" to="/address" onClick={handClickAddress}>
              Addresses
            </Link>
          </li>
        </ul>
      </div>
      <h3>Address</h3>
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
      <div>
        <h3>Saved Addresses</h3>
        {address.map((address) => (
          <div key={address.id}>
            <p>{address.street}</p>
            <p>{address.city}</p>
            <p>
              {address.state} {address.zip}
            </p>
          </div>
        ))}
        ;
      </div>
    </>
  );
}

export default AddressesPage;
