import { Box, styled, Typography } from '@mui/material';
import { FC } from 'react';
import ContentCard from '../components/ContentCard';
import { AthletsContent, PlayerContent } from '../constants/mockData';
import { useOrientation } from '../hooks/useOrientation';
import FootballPlayerImage from '../assets/images/football-player.svg';
import BasketballPlayerImage from '../assets/images/basketball-player.svg';
import ContentSection, { TitleBox } from '../containers/ContentSection';

const Wrapper = styled(Box)(({ theme }) => ({
  maxWidth: '1630px',
  margin: 'auto',
  boxSizing: 'border-box',
  padding: '0 18px',

  [theme.breakpoints.up('md')]: {
    padding: '0 32px',
  },
}));

const Content = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr',

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1fr 2fr',
  },

  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: '1fr 1fr',
  },
}));

const Image = styled('img')(() => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
}));

const Home: FC = () => {
  const { isMobile } = useOrientation();

  return (
    <Wrapper>
      <Content>
        <TitleBox className={isMobile ? 'hidden' : ''}>
          <Image src={FootballPlayerImage} alt="football-player" />
        </TitleBox>
        <ContentSection {...AthletsContent} />
        <ContentSection {...PlayerContent} type="secondary" />
        <TitleBox className={isMobile ? 'hidden' : ''}>
          <Image src={BasketballPlayerImage} alt="basketball-player" />
        </TitleBox>
      </Content>
    </Wrapper>
  );
};

export default Home;
