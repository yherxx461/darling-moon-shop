import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

// Material UI Imports
import { Link } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

// import AboutPage from '../AboutPage/AboutPage';
import AccountPage from '../AccountPage/AccountPage';
// import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import ProductsPage from '../ProductsPage/ProductsPage';
import ThankYouPage from '../ThankYouPage/ThankYouPage';
import ItemizedProduct from '../ItemizedProduct/ItemizedProduct';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import AddressesPage from '../AddressesPage/AddressesPage';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  // const handleOnClick = () => {
  //   console.log('in handleClick App');
  // };

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <>
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:5173 will redirect to localhost:5173/home */}
            <Redirect exact from="/" to="/home" />

            {/* Visiting localhost:5173/about will show the about page. */}
            <Route exact path="/home">
              <LandingPage />
            </Route>
            <Route exact path="/products">
              <ProductsPage />
            </Route>
            <ProtectedRoute exact path="/account">
              <AccountPage />
            </ProtectedRoute>

            <ProtectedRoute exact path="/addresses">
              <AddressesPage />
            </ProtectedRoute>

            <ProtectedRoute exact path="/order-confirmation">
              <ThankYouPage />
            </ProtectedRoute>

            <Route exact path="/login">
              {user.id ? (
                // If the user is already logged in,
                // redirect to the /home page
                <Redirect to="/home" />
              ) : (
                // Otherwise, show the login page
                <LoginPage />
              )}
            </Route>

            <Route exact path="/registration">
              {user.id ? (
                // If the user is already logged in,
                // redirect them to the /user page
                <Redirect to="/home" />
              ) : (
                // Otherwise, show the registration page
                <RegisterPage />
              )}
            </Route>

            <Route exact path="/home">
              {user.id ? (
                // If the user is already logged in,
                // redirect them to the /user page
                <Redirect to="/home" />
              ) : (
                // Otherwise, show the Landing page
                <LandingPage />
              )}
            </Route>

            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
