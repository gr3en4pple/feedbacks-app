import React from 'react';
import CommentInner from './CommentInner';

function CommentReply({ reply,onReplySubmit,onDeleteComment }) {
  return <CommentInner comment={reply} onDeleteComment={onDeleteComment} onReplySubmit={onReplySubmit} />;
}

export default CommentReply;
