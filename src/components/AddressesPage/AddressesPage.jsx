import { Button } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function AddressesPage() {
  const dispatch = useDispatch();
  const address = useSelector((store) => store.address);

  useEffect(() => {
    //initial load --> load once
    dispatch({ type: 'FETCH_ADDRESS' });
  }, []);

  const handleSubmitAddress = () => {
    console.log('in handleSubmitAddresses');
  };

  return (
    <>
      <h3>Address</h3>
      <form className="address-form" onSubmit={handleSubmitAddress}>
        <br></br>
        <input type="text" className="street" placeholder="Street" />
        <br></br>
        <input type="text" className="city" placeholder="City" />
        <br></br>
        <input type="text" className="state" placeholder="State" />
        <br></br>
        <input type="text" className="zip" placeholder="Zip" />
        <br></br>
        <input type="checkbox" className="set-default" />
        Set as default address
        <br></br>
        <Button variant="outlined" size="small">
          Confirm
        </Button>
      </form>
      <div>
        <h3>Saved Addresses</h3>
        {address.map((addressItem) => {
          return (
            <div key={addressItem.id}>
              <p>{addressItem.street}</p>
              <p>{addressItem.city}</p>
              <p>
                {addressItem.state} {addressItem.zip}
              </p>
            </div>
          );
        })}
        <p></p>
      </div>
    </>
  );
}

export default AddressesPage;
