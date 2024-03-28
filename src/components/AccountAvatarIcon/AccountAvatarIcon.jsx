import * as React from 'react';

// Material UI Imports
// import Avatar from '@mui/material/Avatar';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import { useSelector } from 'react-redux';

function AccountAvatarIcon() {
  // const user = useSelector((store) => {
  //   store.user;
  // });
  return (
    <>
      <AccountCircleOutlinedIcon
      // alt={user}
      // src="/broken-image.jpg"
      // sx={{ width: 42, height: 42 }}
      />
    </>
  );
}

export default AccountAvatarIcon;
