import React from 'react';
import { withWidth } from '@material-ui/core';
import XSFeedback from './XSFeedback';
import LargeMediumFeedback from './LargeMediumFeedback';
const Feedback = ({ width, feedback, onUpvote, isLoading, totalComments,ellipsis }) => {
  return (
    <>
      {((width === 'xs' || width === 'sm') && (
        <XSFeedback
          feedback={feedback}
          onUpvote={onUpvote}
          isLoading={isLoading}
          totalComments={totalComments}
          ellipsis={ellipsis}
        />
      )) ||
        ((width === 'lg' || width === 'md') && (
          <LargeMediumFeedback
            feedback={feedback}
            onUpvote={onUpvote}
            isLoading={isLoading}
            totalComments={totalComments}
            ellipsis={ellipsis}
          />
        ))}
    </>
  );
};

export default withWidth()(Feedback);
