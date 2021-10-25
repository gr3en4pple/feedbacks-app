import React from 'react';
import {  Box } from '@material-ui/core';
import {
  Content,
  FeedbackWrapper,
  UpvoteBTN,
  STypo,
  Text,
  Title,
  Type,
} from './StyleFeedback';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
import { StyledDot } from '../Navs/RoadMap';
import { ReactComponent as CommentIcon } from './commentIcon.svg';

const XSFeedback = ({ roadmap, feedback, onUpvote, isLoading,totalComments,ellipsis }) => {
  return (
    <FeedbackWrapper roadmap={roadmap}>
      <Box width="100%" display="flex" flexDirection="column">
        <Content>
          {roadmap && (
            <Box mb={2} display="flex" alignItems="center">
              <StyledDot inputcolor={roadmap} />
              <Text component="span">{feedback.status}</Text>
            </Box>
          )}
          <Title noWrap={ellipsis ? true : false} variant="h6">
            {feedback.title}
          </Title>
          <Text m="6px 0" minheight="48px" ellipsis={ellipsis}>{feedback.content}</Text>
          <Type>{feedback.type}</Type>
        </Content>
        <Box
          pt={4}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <UpvoteBTN
            style={{ flexDirection: 'row' }}
            className={feedback.isClick && 'active'}
            onClick={
              isLoading
                ? (e) => {
                    e.preventDefault();
                  }
                : (e) => onUpvote(e, feedback.id)
            }
          >
            <ExpandLessOutlinedIcon />
            <STypo variant="body2">{feedback.upvote}</STypo>
          </UpvoteBTN>

          <Box display="flex" alignItems="center">
            <CommentIcon style={{ marginRight: 12 }} />
            <Text
              bold={totalComments > 0 ? 'true' : undefined}
              black="true"
            >
              {totalComments}
            </Text>
          </Box>
        </Box>
      </Box>
    </FeedbackWrapper>
  );
};
export default XSFeedback;
