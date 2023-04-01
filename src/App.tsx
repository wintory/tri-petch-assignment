import { Box, styled } from '@mui/material';
import { FC } from 'react';
import Home from './pages/Home';
import Provider from './Provider';

const Wrapper = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.palette.common.white,
  overflow: 'hidden',
}));

const App: FC = () => {
  return (
    <Provider>
      <Wrapper>
        <Home />
      </Wrapper>
    </Provider>
  );
};

export default App;
