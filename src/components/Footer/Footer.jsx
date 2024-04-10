import React from 'react';
import './Footer.css';

import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from '@mui/icons-material';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return <footer>&copy; Darling Moon Shop</footer>;
}

export default Footer;
