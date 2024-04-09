import React, { useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';

// Material UI Imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Link, TextField } from '@mui/material';

// Import Component/Page:
import ShoppingCartIconPage from '../ShoppingCart/ShoppingCartIconPage';
import './AccountPage.css';

function AccountPage() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const history = useHistory();
  // Use for Conditional Rendering
  const [editedName, setEditedName] = useState(user.name);
  const [editedEmail, setEditedEmail] = useState(user.email);
  const [editedPhone, setEditedPhone] = useState(user.phone);

  const handleEdit = (user) => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch({
      type: 'UPDATE_USER',
      payload: {
        id: user.id,
        name: editedName ? editedName : user.name,
        email: editedEmail ? editedEmail : user.email,
        phone: editedPhone ? editedPhone : user.phone,
      },
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedName(user.name);
    setEditedEmail(user.email);
    setEditedPhone(user.phone);
    setIsEditing(false);
  };

  const handleClickAddress = () => {
    history.push('/address');
  };

  const handleClickAccount = () => {
    history.push('/account');
  };

  return (
    <div className="account-page">
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/account" onClick={handleClickAccount}>
              Account
            </Link>
          </li>
          <li>
            <Link to="/address" onClick={handleClickAddress}>
              Addresses
            </Link>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <h2>Welcome, {user.username}!</h2>
        {isEditing ? (
          <>
            <TextField
              type="text"
              defaultValue={user.name}
              placeholder="Name"
              value={editedName}
              onChange={(event) => setEditedName(event.target.value)}
            />
            <TextField
              type="text"
              defaultValue={user.email}
              placeholder="Email"
              value={editedEmail}
              onChange={(event) => setEditedEmail(event.target.value)}
            />
            <TextField
              type="text"
              defaultValue={user.phone}
              placeholder="Phone"
              value={editedPhone}
              onChange={(event) => setEditedPhone(event.target.value)}
            />
            <Button onClick={handleSave}>Save</Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </>
        ) : (
          <Card className="user-info">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
              </div>
              <div>
                <Button variant="outlined" onClick={handleEdit}>
                  Edit
                </Button>
                <LogOutButton />
              </div>
            </Box>
          </Card>
        )}
      </div>
      {/* <Card className="cart-icon">
        <Link to="/cart">
          <ShoppingCartIconPage />
        </Link>
      </Card> */}
    </div>
  );
}
export default AccountPage;
