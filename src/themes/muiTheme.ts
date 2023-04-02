import { createTheme } from '@mui/material';
import { Palette } from '../constants/palette';

const muiTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1024,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '90px',
      lineHeight: '105px',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    h3: {
      fontSize: '50px',
      lineHeight: '59px',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: '36px',
      lineHeight: '42px',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: '28px',
      lineHeight: '33px',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    body1: {
      fontSize: '18px',
      lineHeight: '28px',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    body2: {
      fontSize: '15px',
      lineHeight: '18px',
      fontStyle: 'normal',
      fontWeight: 400,
    },
  },
});

export default muiTheme;
