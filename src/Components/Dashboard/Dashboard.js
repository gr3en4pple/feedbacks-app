import React from 'react';
import '../../App.css';
import Feedback from './Feedback';
import SuggestionHeader from './SuggestionHeader';
import { Grid, withWidth } from '@material-ui/core';
import { useContextState } from '../StateProvider';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { DashBoardWrapper, StyledLink } from './StyleDashBoard';

const variants = {
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};
const childrenVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};
// export const countTotalCMT = (commentList) => {
//   let result = 0;
//   result += commentList.length;
//   return commentList.reduce((accu,comment) => {
//     accu += comment.comments.replies.length;
//     return accu;
//   },result);
// };

const MotionLink = motion(StyledLink);

function Dashboard({ width }) {
  const {
    Feedbacks: { suggestion },
    upvoteHandler,
    type,
    isLoading,
  } = useContextState();

  let FeedbacksFilter;
  if (type === 'All') FeedbacksFilter = [...suggestion];
  else FeedbacksFilter = suggestion.filter((element) => element.type === type);

  return (
    <AnimatePresence>
      <Grid
        component={motion.div}
        item
        container
        direction="column"
        variants={variants}
        initial="hidden"
        animate="show"
        lg={9}
        md={12}
      >
        <SuggestionHeader />
        <DashBoardWrapper pX={width === 'xs'}>
          <AnimateSharedLayout>
            {FeedbacksFilter.map((feedback) => (
              <MotionLink
                variants={childrenVariants}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 40,
                }}
                layout
                key={feedback.id}
                to={`/feedback/${feedback.id}`}
              >
                <Feedback
                  totalComments={feedback.totalComments}
                  feedback={feedback}
                  isLoading={isLoading}
                  onUpvote={upvoteHandler}
                  ellipsis="true"
                />
              </MotionLink>
            ))}
          </AnimateSharedLayout>
        </DashBoardWrapper>
      </Grid>
    </AnimatePresence>
  );
}

export default withWidth()(Dashboard);
