import { Box, styled, Typography } from '@mui/material';
import { FC } from 'react';
import ContentCard from '../components/ContentCard';
import { AthletsContent } from '../constants/mockData';
import { useOrientation } from '../hooks/useOrientation';

const Wrapper = styled(Box)(({ theme }) => ({
  height: '100%',
  maxWidth: '1630px',
  margin: 'auto',
  padding: '0 18px',
  overflowY: 'auto',

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

const TitleBox = styled(Box)(({ theme }) => ({
  width: '100%',
  paddingTop: '18px',

  [theme.breakpoints.up('md')]: {
    paddingTop: '81px',
  },

  [theme.breakpoints.up('lg')]: {
    paddingTop: '24px',
  },

  '&.hidden': {
    display: 'none',
  },
}));

const Home: FC = () => {
  const { isDesktop, isMobile, isTablet } = useOrientation();

  return (
    <Wrapper>
      <Content>
        <TitleBox className={isMobile ? 'hidden' : ''}>
          {/* <Typography variant="h1">ATHLETS</Typography> */}
        </TitleBox>
        {AthletsContent.map(({ title = '', data = [] }) => (
          <TitleBox>
            <Typography variant={isMobile ? 'h3' : 'h1'} color="primary">
              {title}
            </Typography>
            {data.map(({ title, description }, index) => (
              <ContentCard
                title={{ text: title }}
                description={{ text: description }}
                topicNumber={{ text: index + 1 }}
              />
            ))}
          </TitleBox>
        ))}
        <TitleBox className={isMobile ? 'hidden' : ''}>
          {/* <Typography variant="h1">ATHLETS</Typography> */}
        </TitleBox>
      </Content>
    </Wrapper>
  );
};

export default Home;
