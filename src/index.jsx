import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { ThemeProvider, createTheme } from '@mui/material/styles';

import store from './redux/store';

import App from './components/App/App';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#ce93d8',
//     },
//   },
// });

const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
      <App />
      {/* </ThemeProvider> */}
    </Provider>
  </React.StrictMode>
);
