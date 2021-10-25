import { Box } from '@material-ui/core';
import React from 'react';
import { StyledDot, Text, Item } from './RoadMap';


const RoadmapItem = ({ content }) => {
  return (
    <Item>
      <Box display="flex" alignItems="center">
        <Text>
          <StyledDot inputcolor={content.title} />
          {content.title}
        </Text>
      </Box>
      <Text weight="700">{content.fbList.length}</Text>
    </Item>
  );
};

export default RoadmapItem;
