import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

function AccountPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <span>
        <h2>Welcome, {user.username}!</h2>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        {/* <p>Your ID is: {user.id}</p> */}
        {/* DO NOT SHOW USER ID. COMMENTED USER ID OUT. */}
        <LogOutButton className="btn" />
      </span>
      <span>
        <p>Cart</p>
      </span>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default AccountPage;
