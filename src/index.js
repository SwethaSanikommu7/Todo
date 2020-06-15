import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createMuiTheme} from '@material-ui/core'
import {ThemeProvider} from '@material-ui/core'

const theme = createMuiTheme({
  typography: {
    
    fontFamily: [
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
ReactDOM.render(
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>,
  document.getElementById('root')
);
