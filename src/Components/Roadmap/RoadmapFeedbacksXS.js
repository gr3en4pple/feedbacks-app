import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import RoadmapFeedbacks from './RoadmapFeedbacks';

const slideVariants = {
  hide: (direction) => {
    return {
      
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    };
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
  exit: (direction) => {
    return {
      x: direction < 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        duration: 0.2
      },
    };
  },
};
const RoadmapFeedbacksXS = ({
  direction,
  isLoading,
  upvoteHandler,
  content,
}) => {
  return (
    <AnimatePresence initial={false} exitBeforeEnter custom={direction}>
      <motion.div
        key={content.title}
        variants={slideVariants}
        animate="show"
        exit="exit"
        initial="hide"
        custom={direction}
      >
        <RoadmapFeedbacks
          content={content}
          isLoading={isLoading}
          upvoteHandler={upvoteHandler}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default RoadmapFeedbacksXS;
