import { Box, styled, Typography } from '@mui/material';
import { FC } from 'react';
import useOrientation from '../../hooks/useOrientation';
import { Content } from '../../types/content';
import { formatMinTwoDigits } from '../../utils';

export interface ContentCardProps {
  title: Content;
  description: Content;
  topicNumber: Content;
}

const Wrapper = styled(Box)(({ theme }) => ({
  padding: '16px 0',

  [theme.breakpoints.up('md')]: {
    padding: '30px 0',
  },

  [theme.breakpoints.up('lg')]: {
    padding: '56px 0',
  },
}));

const TitleWrapper = styled(Box)(() => ({
  display: 'inline-flex',
}));

const TopicNumber = styled(Typography)(() => ({
  display: 'block',
  position: 'relative',
  marginRight: '8px',

  ':before': {
    content: '""',
    position: 'absolute',
    bottom: '8px',
    left: 0,
    right: 0,
    height: 0,
    border: '3px solid #603EBE',
    borderRadius: '2.5px',
  },
}));

const ContentCard: FC<ContentCardProps> = ({
  title,
  description,
  topicNumber,
}) => {
  const { isMobile } = useOrientation();

  return (
    <Wrapper className="content-card">
      <TitleWrapper>
        <TopicNumber className="topic">
          <Typography variant="body1">
            {formatMinTwoDigits(topicNumber.text)}
          </Typography>
        </TopicNumber>
        <Typography
          variant={isMobile ? 'subtitle2' : 'subtitle1'}
          sx={title.style}
        >
          {title.text}
        </Typography>
      </TitleWrapper>
      <Typography
        variant={isMobile ? 'body2' : 'body1'}
        pt="20px"
        sx={description.style}
      >
        {description.text}
      </Typography>
    </Wrapper>
  );
};

export default ContentCard;
