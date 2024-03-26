import React, { useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';

// Material UI Imports
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Link } from '@mui/material';
// import Badge from '@mui/material/Badge';

// Import Component/Page:
import ShoppingCartIconPage from '../ShoppingCart/ShoppingCartIconPage';

function AccountPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  // Reminder: set useState to false to render original information --> true will make the input field appears in order to edit the information.
  const [isEditing, setIsEditing] = useState(false);
  //
  // const history = useHistory();

  // const handleClick = () => {
  //   history.push('/shoppingCart');
  //   // console.log('navigate to Orders');
  // };
  return (
    <div className="container">
      {/*TO-DO: Conditional Rendering to make userInformation editable */}
      {isEditing ? (
        <div>
          <input value={user.phone} />
          <p>hello</p>
        </div>
      ) : (
        // <div className="container">
        <Card sx={{ display: 'flex' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              // content: 'center,',
            }}
          >
            <h2>Welcome, {user.username}!</h2>
            {/* boolean true for editField */}
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            {/* <p>Your ID is: {user.id}</p> */}
            {/* DO NOT SHOW USER ID. COMMENTED USER ID OUT. */}{' '}
            <LogOutButton className="btn" />
          </Box>{' '}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Link to="/shoppingCart">
              <ShoppingCartIconPage />
            </Link>
          </Box>
        </Card>
      )}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default AccountPage;
