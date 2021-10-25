import React, { useState } from 'react';
import RoadmapHeader from './RoadmapHeader';
import { motion } from 'framer-motion';
import { withWidth, Grid, Box } from '@material-ui/core';
import { Wrapper, variants } from './StyleRoadmap';
import { useContextState } from '../StateProvider';
import StickyNavbar from './StickyNavbar';
import RoadmapFeedbacks from './RoadmapFeedbacks';
import RoadmapFeedbacksXS from './RoadmapFeedbacksXS';

const Roadmap = ({ width }) => {
  const {
    Feedbacks: { live, planned, inprogress },
    isLoading,
    upvoteHandler,
  } = useContextState();

  const [[direction, page], setRoadmap] = useState([-1, 0]);
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
  const onRoadmapChange = (newDirection, newPage) =>
    setRoadmap([newDirection, newPage]);

  return (
    <>
      {(width === 'xs' || width === 'sm') && (
        <>
          <RoadmapHeader />
          <StickyNavbar
            direction={direction}
            currentPage={page}
            onRoadmapChange={onRoadmapChange}
          />
        </>
      )}
      <Wrapper
        as={motion.div}
        variants={variants}
        animate="show"
        initial="hide"
        pad={width === 'lg' || width === 'md'}
        exit="exit"
      >
        {(width === 'lg' || width === 'md') && <RoadmapHeader />}

        <Box mt={6} px={(width === 'xs') ? 2.5 : 0}>
          {(width === 'lg' || width === 'md') && (
            <Grid container spacing={3}>
              {roadMapArr.map((content) => (
                <Grid item key={content.title} lg={4} md={4}>
                  <RoadmapFeedbacks
                    content={content}
                    isLoading={isLoading}
                    upvoteHandler={upvoteHandler}
                  />
                </Grid>
              ))}
            </Grid>
          )}

          {(width === 'xs' || width === 'sm') && (
            <RoadmapFeedbacksXS
              direction={direction}
              currentPage={page}
              live={live}
              planned={planned}
              inprogress={inprogress}
              isLoading={isLoading}
              upvoteHandler={upvoteHandler}
            />
          )}
        </Box>
      </Wrapper>
    </>
  );
};

export default withWidth()(Roadmap);
