import React from 'react';
import { Box, withWidth } from '@material-ui/core';
import { MotionButton } from './StyleAdd';
const SubmitButton = ({
  id,
  onDeleteHandler,
  onCancleHandler,
  onSubmitHandler,
  width,
}) => {
  return (
    <Box
      pt={width === 'xs' || width === 'sm' ? 2 : 5}
      flexDirection={width === 'xs' || width === 'sm' ? 'column' : 'row'}
      display="flex"
      justifyContent={!id ? 'flex-end' : 'space-between'}
    >
      {id && (
        <MotionButton
          onClick={onDeleteHandler}
          variant="contained"
          fullWidth={width === 'xs' || width === 'sm'}
          size="large"
        >
          Delete
        </MotionButton>
      )}
      <Box
        display="flex"
        flexDirection={width === 'xs' || width === 'sm' ? 'column' : 'row'}
      >
        <Box m={width === 'xs' || width === 'sm' ? '16px 0' : '0 16px'}>
          <MotionButton
            onClick={onCancleHandler}
            variant="contained"
            color="primary"
            fullWidth={width === 'xs' || width === 'sm'}
            size="large"
          >
            Cancel
          </MotionButton>
        </Box>
        <MotionButton
          onClick={onSubmitHandler}
          variant="contained"
          color="secondary"
          fullWidth={width === 'xs' || width === 'sm'}
          size="large"
        >
          {id ? 'Save Changes' : 'Add Feedback'}
        </MotionButton>
      </Box>
    </Box>
  );
};

export default withWidth()(SubmitButton);
