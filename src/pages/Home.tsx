import { Box, styled, Typography } from '@mui/material';
import { FC } from 'react';
import { AthletsContent, PlayerContent } from '../constants/mockData';
import { useOrientation } from '../hooks/useOrientation';
import FootballPlayerImage from '../assets/images/football-player.svg';
import BasketballPlayerImage from '../assets/images/basketball-player.svg';
import ContentSection, { TitleBox } from '../containers/ContentSection';

const Wrapper = styled(Box)(({ theme }) => ({
  maxWidth: '1630px',
  margin: 'auto',
  boxSizing: 'border-box',
  padding: 0,

  [theme.breakpoints.up('md')]: {
    padding: '0 32px',
    backgroundColor: 'transparent',
  },
}));

const Content = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr',
  backgroundColor: '#FFFFFF',

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '60% auto',
    backgroundColor: 'transparent',

    ':first-child': {
      gridTemplateColumns: '40% auto',
    },
  },

  [theme.breakpoints.up('lg')]: {
    backgroundColor: 'transparent',
    gridTemplateColumns: '1fr 1fr',
  },
}));

const Image = styled('img')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',

  [theme.breakpoints.down('md')]: {
    position: 'relative',
    maxHeight: '400px',
  },

  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    top: '24px',
    minWidth: '500px',
    right: 0,

    '&.right-image': {
      height: 'auto',
      minWidth: '690px',
      right: 0,
      left: '-100px',
    },
  },

  [theme.breakpoints.up('lg')]: {
    position: 'absolute',
    maxWidth: 'auto',
    top: '24px',
    right: '100px',

    '&.right-image': {
      height: 'auto',
      minWidth: '830px',
      top: 0,
      right: 0,
      left: '-100px',
    },
  },
}));

const Home: FC = () => {
  const { isMobile } = useOrientation();

  return (
    <Wrapper>
      <Content>
        <Typography
          variant={isMobile ? 'h3' : 'h1'}
          color="#E7E7E7"
          display={isMobile ? 'initial' : 'none'}
          paddingX={isMobile ? '18px' : 0}
        >
          {AthletsContent.title}
        </Typography>
        <TitleBox>
          <Box
            display="flex"
            justifyContent="center"
            paddingX={isMobile ? '50px' : 0}
          >
            <Image src={FootballPlayerImage} alt="football-player" />
          </Box>
        </TitleBox>
        <ContentSection {...AthletsContent} />
      </Content>
      <Content>
        <Typography
          variant={isMobile ? 'h3' : 'h1'}
          color="#E7E7E7"
          pt="18px"
          display={isMobile ? 'initial' : 'none'}
          paddingX={isMobile ? '18px' : 0}
        >
          {PlayerContent.title}
        </Typography>
        {isMobile && (
          <TitleBox>
            <Box display="flex" justifyContent="center" paddingX="50px">
              <Image src={BasketballPlayerImage} alt="basketball-player" />
            </Box>
          </TitleBox>
        )}
        <ContentSection {...PlayerContent} type="secondary" />
        <TitleBox className={isMobile ? 'hidden' : ''}>
          <Image
            className="right-image"
            src={BasketballPlayerImage}
            alt="basketball-player"
          />
        </TitleBox>
      </Content>
    </Wrapper>
  );
};

export default Home;
