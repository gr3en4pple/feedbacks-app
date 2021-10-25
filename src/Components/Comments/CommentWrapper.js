import React from 'react';
import { Box, Divider } from '@material-ui/core';
import CommentReply from './CommentReply';
import CommentInner from './CommentInner';
import { RepContainer, RepWrapper } from './StyleComments';
import { AnimatePresence } from 'framer-motion';
function CommentWrapper({ comment, onReplySubmit, onDeleteComment }) {
  const { replies } = comment;

  return (
    <Box width="100%" paddingY={2} position="relative">
      <CommentInner
        onReplySubmit={onReplySubmit}
        comment={comment}
        onDeleteComment={onDeleteComment}
      />

      <RepWrapper className="comment-reply">
        <Divider orientation="vertical" className="side-divider" flexItem />
        <RepContainer>
          <AnimatePresence>
            {replies.map((reply, index) => (
              <CommentReply
                onReplySubmit={onReplySubmit}
                key={index}
                reply={reply}
                onDeleteComment={onDeleteComment}
              />
            ))}
          </AnimatePresence>
        </RepContainer>

        <Divider absolute light className="bottom-divider" />
      </RepWrapper>
    </Box>
  );
}

export default CommentWrapper;
