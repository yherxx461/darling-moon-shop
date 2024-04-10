import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartIconPage from '../ShoppingCart/ShoppingCartIconPage';
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
      position="sticky"
      style={{
        backgroundColor: 'lavender',
        color: 'black',
        boxShadow: '0px 0px 0px 0px',
      }}
    >
      <Toolbar>
        <IconButton arial-label="app">
          <Menu color="inherit" />
        </IconButton>
        <Typography variant="h6" component="div" fontFamily="initial">
          <Link to="/products" style={{ color: 'black' }}>
            Products
          </Link>
        </Typography>
        <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography
            variant="h6"
            component="div"
            fontFamily="initial"
            textAlign="center"
          >
            Darling Moon Shop
          </Typography>
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        {user.id ? (
          <>
            <Link to="/cart" className="navLink">
              <IconButton style={{ color: 'black' }}>
                <ShoppingCartIconPage />
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
            Login / Register
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
