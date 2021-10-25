import React, { useEffect, useReducer } from 'react';
import { withWidth, SvgIcon, IconButton } from '@material-ui/core';
import Feedback from '../Dashboard/Feedback';
import { useContextState } from '../StateProvider';
import { useParams, useHistory } from 'react-router';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { AnimatePresence, motion } from 'framer-motion';
import {
  wrapperVariants,
  PageWrapper,
  PageContent,
  ButtonsContent,
  NormalButton,
  CommentsWrapper,
  CommentContent,
  Text,
} from './StyleComments';
import CommentInput from './CommentInput';
import CommentWrapper from './CommentWrapper';
import { addComment, updateFeedback } from '../useFirestore';

const commentReducer = (state, action) => {
  switch (action.type) {
    case 'GET_API': {
      return {
        ...state,
        feedback: action.feedback,
        commentList: action.commentList,
        totalComments: action.totalComments,
      };
    }
    default:
      throw new Error('Action type invalid');
  }
};

const initialComment = {
  feedback: null,
  commentList: [],
  totalComments: 0,
};

function Comments({ width }) {
  const { upvoteHandler, data, isLoading } = useContextState();
  const [state, dispatch] = useReducer(commentReducer, initialComment);
  const { feedback, commentList, totalComments } = state;

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const newFeedback = data.find((element) => element.id === id);
    const action = {
      type: 'GET_API',
      feedback: newFeedback,
      commentList: newFeedback?.commentList,
      totalComments: newFeedback?.totalComments,
    };
    dispatch(action);
  }, [data, id]);
  const onBackHandler = () => {
    history.goBack();
  };
  const onEditHandler = () => {
    history.push(`/feedback/edit/${id}`);
  };

  const onReplySubmit = async (text, commentID, commentAccount) => {
    const newReply = {
      ava: 'https://avatars.dicebear.com/api/avataaars/suzzane%20chang.svg',
      name: 'Suzanne Chang',
      account: 'upbeat1811',
      text: text,
      id: commentID,
      to: commentAccount,
      currentUser: 'upbeat1811',
      timestamp: new Date().valueOf(),
    };
    const commentIndex = commentList.findIndex(
      (element) => element.id === commentID
    );
    const newCommentList = [...commentList];
    newCommentList[commentIndex].replies.push(newReply);
    const newObj = {
      commentList: newCommentList,
      totalComments: totalComments + 1,
    };
    updateFeedback(newObj, id);
  };

  const onCommentSubmit = (value) => {
    const newComment = {
      ava: 'https://avatars.dicebear.com/api/avataaars/suzzane%20chang.svg',
      name: 'Suzanne Chang',
      account: 'upbeat1811',
      text: value,
      replies: [],
      id: new Date().valueOf(),
      currentUser: 'upbeat1811',
      timestamp: new Date().valueOf(),
    };
    addComment(newComment, id, totalComments);
  };

  const onDeleteComment = (commentID, timestamp) => {
    let newCommentList;
    let totalDelComments = 0;
    const commentIndex = commentList.findIndex(
      (comment) => comment.id === commentID
    );
    if (commentID === timestamp) {
      totalDelComments = commentList[commentIndex].replies.length + 1;
      newCommentList = [
        ...commentList.slice(0, commentIndex),
        ...commentList.slice(commentIndex + 1),
      ];
    } else {
      let newReplies = [...commentList[commentIndex].replies];
      const replyIndex = newReplies.findIndex(
        (reply) => reply.timestamp === timestamp
      );
      console.log(replyIndex);
      newReplies = [
        ...newReplies.slice(0, replyIndex),
        ...newReplies.slice(replyIndex + 1),
      ];
      newCommentList = [...commentList];
      newCommentList[commentIndex].replies = [...newReplies];
      totalDelComments = 1;
    }
    const newObj = {
      commentList: newCommentList,
      totalComments: totalComments - totalDelComments,
    };
    updateFeedback(newObj, id);
  };

  return (
    <>
      {feedback && (
        <PageWrapper
          as={motion.div}
          variants={wrapperVariants}
          initial="hide"
          animate="show"
          exit="exit"
          p={width === 'xs' || width === 'sm'}
        >
          <PageContent>
            <ButtonsContent>
              <IconButton onClick={onBackHandler}>
                <SvgIcon color="primary" fontSize="large">
                  <ChevronLeftIcon />
                </SvgIcon>
              </IconButton>
              <NormalButton
                onClick={onEditHandler}
                variant="contained"
                color="primary"
              >
                Edit Feedback
              </NormalButton>
            </ButtonsContent>

            <Feedback
              feedback={feedback || {}}
              totalComments={totalComments}
              onUpvote={upvoteHandler}
              isLoading={isLoading}
            />

            <CommentsWrapper>
              <CommentContent>
                <Text bold="true" variant="h6">
                  {totalComments} Comments
                </Text>

                <AnimatePresence>
                  {commentList &&
                    commentList.map((comment) => (
                      <CommentWrapper
                      
                        onReplySubmit={onReplySubmit}
                        key={comment.id}
                        comment={comment}
                        onDeleteComment={onDeleteComment}
                      />
                    ))}
                </AnimatePresence>
              </CommentContent>
            </CommentsWrapper>
            <CommentsWrapper>
              <CommentContent>
                <Text bold="true" variant="h6">
                  Add comment
                </Text>
                <CommentInput onCommentSubmit={onCommentSubmit} />
              </CommentContent>
            </CommentsWrapper>
          </PageContent>
        </PageWrapper>
      )}
    </>
  );
}

export default withWidth()(Comments);
