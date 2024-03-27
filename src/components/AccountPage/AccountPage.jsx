import React, { useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';

// Material UI Imports
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Link, TextField } from '@mui/material';
// import Badge from '@mui/material/Badge';

// Import Component/Page:
import ShoppingCartIconPage from '../ShoppingCart/ShoppingCartIconPage';

function AccountPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  // Reminder: set useState to false to render original information --> true will make the input field appears in order to edit the information.
  const [isEditing, setIsEditing] = useState(false);
  // Use for Conditional Rendering
  const [editedName, setEditedName] = useState(user.name);
  const [editedEmail, setEditedEmail] = useState(user.email);
  const [editedPhone, setEditedPhone] = useState(user.phone);

  // const history = useHistory();

  // const handleClick = () => {
  //   history.push('/shoppingCart');
  //   // console.log('navigate to Orders');
  // };

  const handleEdit = (user) => {
    // dispatch({ type: 'UPDATE_USER', payload: { id: user.id } });
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

  return (
    <div className="container">
      {/*TO-DO: Conditional Rendering to make userInformation editable */}
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
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
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
            {/* boolean true for editField */}
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <button onClick={handleEdit}>Edit</button>
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
