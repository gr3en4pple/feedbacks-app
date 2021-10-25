import React from 'react';
import { Grid } from '@material-ui/core';
import Navbar from './Navs/Navbar';
import Dashboard from './Dashboard/Dashboard';
import withWidth from '@material-ui/core/withWidth';
import { motion } from 'framer-motion';

const HomeVariants = {
  hidden: {
    y: '-110%',
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    y: '0',
    opacity: 1,
  },
};

function Home({ width }) {
  
 
 

  return (
    <motion.div
      variants={HomeVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Grid
        container
        spacing={width === 'lg' || width === 'md' ? 3 : 0}
        alignItems={width === 'lg' ? 'flex-start' : 'stretch'}
        direction={width === 'lg' ? 'row' : 'column'}
      >
        <Navbar />
        <Dashboard />
      </Grid>
    </motion.div>
  );
}

export default withWidth()(Home);
