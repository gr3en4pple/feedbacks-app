import React, { useState } from 'react';
import { withWidth, Box } from '@material-ui/core';
import {
  StyledAvatar,
  Text,
  CommentText,
  ReplyButton,
  MultiRowsInput,
  ReplySubmitBTN,
  commentVariants,
  CommentTag,
  MultiRowsForm,
  MultiRowsWrapper,
  DeleteButton,
} from './StyleComments';
import useMultilineInput from './useMultilineInput';
import DeleteIcon from '@material-ui/icons/Delete';
import { AnimatePresence, motion } from 'framer-motion';

const replyAnimate = {
  hide: {
    opacity: 0,

    height: 0,
    transition: {
      type: 'tween',
      duration: 0.25,
    },
  },
  show: {
    opacity: 1,
    height: 150,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
};

const CommentInner = ({ width, comment, onReplySubmit, onDeleteComment }) => {
  const [isReply, setReply] = useState(false);
  const onReplyClickHandler = () => {
    setReply((prev) => !prev);
  };
  const mySubmitHandler = (e) => {
    onReplySubmit(input, comment.id, comment.account);
    onSubmit(e);
    setReply(false);
  };

  const { input, isValid, onSubmit, onChangeHandler, onKeyDownHandler } =
    useMultilineInput(250, mySubmitHandler);
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="space-between"
      paddingY={2}
      flexWrap="wrap"
      component={motion.div}
      initial="hide"
      animate="show"
      exit="hide"
      variants={commentVariants}
      whiteSpace="pre-line"
    >
      <Box>
        <StyledAvatar alt="avatar" src={comment.ava} />
      </Box>
      <Box marginLeft="20px" flex="2">
        <Text bold="true">{comment.name}</Text>
        <Text variant="caption">@{comment.account}</Text>
        {width !== 'xs' && (
          <CommentText>
            {comment.to && (
              <CommentTag color="secondary" component="span">
                @{comment.to}{' '}
              </CommentTag>
            )}
            {comment.text}
          </CommentText>
        )}
      </Box>

      <Box display="flex" flexDirection="column">
        <ReplyButton
          onClick={onReplyClickHandler}
          disableRipple
          padding="0"
          color="primary"
        >
          Reply
        </ReplyButton>
      </Box>
      {width === 'xs' && (
        <Box width="100%">
          <CommentText>
            {comment.to && (
              <CommentTag color="secondary" component="span">
                @{comment.to}{' '}
              </CommentTag>
            )}
            {comment.text}
          </CommentText>
        </Box>
      )}
      <MultiRowsWrapper ml={width !== 'xs' ? '60px' : 0}>
        {comment.currentUser === 'upbeat1811' && (
          <DeleteButton
            onClick={() => onDeleteComment(comment.id, comment.timestamp)}
            disableRipple
          >
            <DeleteIcon fontSize="small" />
          </DeleteButton>
        )}
        <AnimatePresence exitBeforeEnter>
          {isReply && (
            <MultiRowsForm
              variants={replyAnimate}
              animate="show"
              initial="hide"
              exit="hide"
              as={motion.form}
              onSubmit={mySubmitHandler}
            >
              <MultiRowsInput
                placeholder={`Replying to @${comment.account}`}
                value={input}
                onChange={onChangeHandler}
                onKeyDown={onKeyDownHandler}
              />
              <ReplySubmitBTN onSubmitClick={mySubmitHandler} valid={isValid} />
            </MultiRowsForm>
          )}
        </AnimatePresence>
      </MultiRowsWrapper>
    </Box>
  );
};

export default withWidth()(CommentInner);
