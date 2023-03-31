import { ThemeProvider } from '@mui/material';
import { FC, ReactNode } from 'react';
import muiTheme from './themes/muiTheme';

const Provider: FC<{ children: ReactNode }> = ({ children }) => {
  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
};

export default Provider;
