import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import RoadmapFeedbacks from './RoadmapFeedbacks';

const slideVariants = {
  hide: (direction) => {
    return {
      x: direction > 0 ? '-100vw' : '100vw',
      opacity: 0,
    };
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
    },
  },
  exit: (direction) => {
    return {
      x: direction < 0 ? '-100vw' : '100vw',
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    };
  },
};
const RoadmapFeedbacksXS = ({
  direction,
  currentPage,
  live,
  planned,
  inprogress,
  isLoading,
  upvoteHandler,
}) => {
  const roadMapArr = [
    {
      fbList: planned,
      title: 'Planned',
      subtitle: 'Currently being developed',
    },
    {
      fbList: inprogress,
      title: 'In-Progress',
      subtitle: 'Released features',
    },
    {
      fbList: live,
      title: 'Live',
      subtitle: 'Ideas prioritized for research',
    },
  ];
  return (
    <AnimatePresence initial={false} exitBeforeEnter custom={direction}>
      <motion.div
        key={currentPage}
        variants={slideVariants}
        animate="show"
        exit="exit"
        initial="hide"
        custom={direction}
      >
        <RoadmapFeedbacks
          content={roadMapArr[currentPage]}
          isLoading={isLoading}
          upvoteHandler={upvoteHandler}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default RoadmapFeedbacksXS;
