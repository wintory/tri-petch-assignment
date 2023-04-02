import { Box, styled, Typography } from '@mui/material';
import { FC } from 'react';
import ContentCard from '../../components/ContentCard';
import useOrientation from '../../hooks/useOrientation';

type BackgroundType = 'primary' | 'secondary';

export interface ContentBoxProps {
  title: string;
  data: {
    title: string;
    description: string;
  }[];
  type?: BackgroundType;
}

export const TitleBox = styled(Box)<{ type?: BackgroundType }>(
  ({ theme, type }) => ({
    width: '100%',
    paddingTop: '18px',
    position: 'relative',

    [theme.breakpoints.up('md')]: {
      paddingTop: type === 'primary' ? '81px' : '51px',
    },

    [theme.breakpoints.up('lg')]: {
      paddingTop: type === 'primary' ? '24px' : '80px',
    },

    '&.hidden': {
      display: 'none',
    },
  })
);

const ItemWrapper = styled(Box)<{ type: BackgroundType }>(({ type }) => ({
  'div:nth-child(1)': {
    '.content-box:before': {
      backgroundColor: '#FFFFFF',
    },
  },

  'div:nth-child(2)': {
    '.content-box:before': {
      backgroundColor: '#F5F4F9',
    },
  },

  'div:nth-child(3)': {
    color: '#FFFFFF',

    '.topic': {
      color: type === 'secondary' ? '#8F6BE8' : '#000000',
    },

    '.topic:before': {
      border: '3px solid #FFFFFF',
    },

    '.content-box:before': {
      backgroundColor: type === 'secondary' ? '#090C35' : '#5E3DB3',
    },
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  ':before': {
    content: '""',
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    height: '100%',
    width: '10000px',
    left: '-2000px',
    zIndex: '-1',
  },
}));

const ContentSection: FC<ContentBoxProps> = ({
  title,
  data,
  type = 'primary',
}) => {
  const { isMobile } = useOrientation();

  return (
    <TitleBox type={type}>
      <Typography variant={isMobile ? 'h3' : 'h1'} color="#E7E7E7">
        {title}
      </Typography>
      <ItemWrapper type={type}>
        {data.map(({ title, description }, index) => (
          <Box position="relative">
            <ContentBox className="content-box">
              <ContentCard
                title={{ text: title, style: { color: '#C2C2C2' } }}
                description={{ text: description }}
                topicNumber={{
                  text: index + 1,
                }}
              />
            </ContentBox>
          </Box>
        ))}
      </ItemWrapper>
    </TitleBox>
  );
};

export default ContentSection;
