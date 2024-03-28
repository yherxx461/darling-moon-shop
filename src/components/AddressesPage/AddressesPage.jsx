import { Button } from '@mui/material';

function AddressesPage() {
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
    </>
  );
}

export default AddressesPage;
