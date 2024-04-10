import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartIconPage from '../ShoppingCart/ShoppingCartIconPage';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Menu,
} from '@mui/material';
function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: 'lavender',
        color: 'black',
        boxShadow: '0px 0px 0px 0px',
      }}
    >
      <Toolbar>
        <IconButton arial-label="app" style={{ color: 'black' }} f>
          <Menu color="inherit" />
        </IconButton>
        <Link to="/home" className="navLink">
          <IconButton style={{ color: 'black' }}>
            <HomeOutlinedIcon fontSize="large" />{' '}
          </IconButton>
        </Link>
        <Link to="/products" className="navLink">
          {/* <Typography variant="h7" component="div" fontFamily="inherit"> */}
          <IconButton style={{ color: 'black' }}>
            {/* <MenuOutlinedIcon fontSize="large" /> */}
            <Typography>Products</Typography>
          </IconButton>
          {/* </Typography> */}
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="h6" component="div" fontFamily="inherit">
          Darling Moon Shop
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        {user.id ? (
          <>
            <Link to="/cart" className="navLink">
              <IconButton style={{ color: 'black' }}>
                <ShoppingCartIconPage fontSize="medium" />
              </IconButton>
            </Link>
            <Link to="/account" className="navLink">
              <IconButton style={{ color: 'black' }}>
                <AccountCircleOutlined fontSize="large" />
              </IconButton>
            </Link>
            <LogOutButton className="navLink" />
          </>
        ) : (
          <Link to="/login" className="navLink">
            <IconButton>
              <Typography
                // variant="h9"
                component="div"
                fontFamily="inherit"
                color="black"
                className="navLink"
              >
                Login / Register
              </Typography>
            </IconButton>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
