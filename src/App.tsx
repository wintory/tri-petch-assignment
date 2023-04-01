import { Box, styled } from '@mui/material';
import { FC } from 'react';
import Home from './pages/Home';
import Provider from './Provider';

const Wrapper = styled(Box)(() => ({
  width: '100vw',
  height: '100vh',
  overflowX: 'hidden',
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
