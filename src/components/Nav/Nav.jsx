import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartIconPage from '../ShoppingCart/ShoppingCartIconPage';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/products" className="navLink">
          <Typography variant="h6" component="div">
            Products
          </Typography>
        </Link>
        <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6" component="div">
            Darling Moon Shop
          </Typography>
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        {user.id ? (
          <>
            <Link to="/cart" className="navLink">
              <IconButton color="inherit">
                <ShoppingCartIconPage />
              </IconButton>
            </Link>
            <Link to="/account" className="navLink">
              <IconButton color="inherit">
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
