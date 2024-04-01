import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartIconPage from '../ShoppingCart/ShoppingCartIconPage';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      {user.id && (
        <>
          <Link className="navLink" to="/products">
            Products
          </Link>
        </>
      )}
      {!user.id && (
        // If there's no user, show login/registration links
        <Link className="navLink" to="/products">
          Products
        </Link>
      )}
      <Link to="/home">
        <h2 className="nav-title">Darling Moon Shop</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/cart">
              <ShoppingCartIconPage />
            </Link>
            <Link className="navLink" to="/account">
              <AccountCircleOutlined fontSize="large" />
            </Link>

            <Link to="/home">
              <LogOutButton className="navLink" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
