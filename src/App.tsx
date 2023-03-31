import { Box } from '@mui/material';
import { FC } from 'react';
import Home from './pages/Home';
import Provider from './Provider';

const App: FC = () => {
  return (
    <Provider>
      <Box width="100vw" height="100vh">
        <Home />
      </Box>
    </Provider>
  );
};

export default App;
