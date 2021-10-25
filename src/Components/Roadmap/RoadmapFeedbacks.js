import React from 'react';
import { Text, Title } from './StyleRoadmap';
import { Box } from '@material-ui/core';
import { StyledLink } from '../Dashboard/StyleDashBoard';
import XSFeedback from '../Dashboard/XSFeedback';
const RoadmapFeedbacks = ({ content, isLoading, upvoteHandler }) => {
  return (
    <>
      <Title variant="h6">
        {' '}
        {content.title} ({content.fbList.length})
      </Title>
      <Text>{content.subtitle}</Text>
      <Box py={3}>
        {content.fbList.map((feedback) => (
          <StyledLink to={`feedback/${feedback.id}`} key={feedback.id}>
            <XSFeedback
              roadmap={feedback.status}
              feedback={feedback}
              isLoading={isLoading}
              onUpvote={upvoteHandler}
              totalComments={feedback.totalComments}
              ellipsis="true"
            />
          </StyledLink>
        ))}
      </Box>
    </>
  );
};

export default RoadmapFeedbacks;
