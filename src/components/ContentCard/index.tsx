import { Box, styled, Typography } from '@mui/material';
import { FC } from 'react';
import { Content } from '../../types/content';

export interface ContentCardProps {
  title: Content;
  description: Content;
  topicNumber: Content;
}

const TitleWrapper = styled('div')(() => ({
  display: 'inline-flex',
}));

const ContentCard: FC<ContentCardProps> = ({
  title,
  description,
  topicNumber,
}) => {
  return (
    <Box>
      <TitleWrapper>
        <Box>{topicNumber.text}</Box>
        <Typography>{topicNumber.text}</Typography>
      </TitleWrapper>
    </Box>
  );
};

export default ContentCard;
