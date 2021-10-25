import React from 'react';
import Header from '../Header';
import RoadmapSubHeader from './RoadmapSubHeader';
const RoadmapHeader = (props) => (
  <Header {...props} OptionComponent={<RoadmapSubHeader />} />
);

export default RoadmapHeader;
