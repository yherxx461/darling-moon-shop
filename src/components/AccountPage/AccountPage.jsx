import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import { Link } from '@mui/material';

function AccountPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();

  const handleClick = () => {
    history.push('/shoppingcart');
    // console.log('navigate to Orders');
  };
  return (
    <div className="container">
      <span className="span-container">
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
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            {/* <p>Your ID is: {user.id}</p> */}
            {/* DO NOT SHOW USER ID. COMMENTED USER ID OUT. */}
            {/* </Box>
        </Card>
        <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}> */}{' '}
            {/* <ShoppingCartOutlinedIcon /> */}
            <LogOutButton className="btn" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              // content: 'center',
            }}
          >
            <Link to="/orders">
              <ShoppingCartOutlinedIcon
                className="shoppingCart"
                onClick={handleClick}
              />
            </Link>
          </Box>
        </Card>
      </span>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default AccountPage;