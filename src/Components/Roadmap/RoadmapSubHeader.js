import React from 'react'
import { useHistory } from 'react-router';
import { Box } from '@material-ui/core';
import { SCButton } from './StyleRoadmap';
import { Text } from '../Dashboard/StyleDashBoard';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
const RoadMapSubHeader = () => {
    const history = useHistory();
    const cancleHandler = (e) => {
      history.goBack();
    };
    return (
      <Box display="flex" flexDirection="column">
        <Box>
          <SCButton onClick={cancleHandler} disableRipple>
            <ChevronLeftRoundedIcon fontSize="small" />
            Go back
          </SCButton>
        </Box>
  
        <Text weight="600" variant="h5">Roadmap</Text>
      </Box>
    );
  };
export default RoadMapSubHeader
