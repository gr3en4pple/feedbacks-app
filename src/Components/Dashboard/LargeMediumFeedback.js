import React from 'react';
import { Box} from '@material-ui/core';
import {
  FeedbackWrapper,
  FeedbackInner,
  FeedbackContent,
  UpvoteBTN,
  Content,
  Title,
  Text,
  Type,
  FeedbackComments,
  STypo,
} from './StyleFeedback';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
import { ReactComponent as CommentIcon } from './commentIcon.svg';

const LargeMediumFeedback = ({
  totalComments,
  feedback,
  onUpvote,
  isLoading,
  ellipsis,
}) => {
  return (
    <FeedbackWrapper>
      <FeedbackInner>
        <FeedbackContent>
          <Box>
            <UpvoteBTN
              className={feedback.isClick && 'active'}
              onClick={
                !isLoading
                  ? (e) => {
                      onUpvote(e, feedback.id);
                    }
                  : (e) => {
                      e.preventDefault();
                      return null;
                    }
              }
            >
              <ExpandLessOutlinedIcon />
              <STypo>{feedback.upvote}</STypo>
            </UpvoteBTN>
          </Box>
          <Content>
            <Title variant="h6" ellipsis={ellipsis} >{feedback.title}</Title>
            <Text m="12px 0" ellipsis={ellipsis}>
              {feedback.content}
            </Text>
            <Type>{feedback.type}</Type>
          </Content>
        </FeedbackContent>
        <FeedbackComments>
          <CommentIcon style={{ marginRight: 16 }} />

          <Text bold={totalComments > 0 ? 'true' : undefined} black="true">
            {totalComments}
          </Text>
        </FeedbackComments>
      </FeedbackInner>
    </FeedbackWrapper>
  );
};
export default LargeMediumFeedback;
