import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { SCInput } from '../Edit/StyleAdd';
import { NormalButton, Text } from './StyleComments';
import useMultilineInput from './useMultilineInput';

function CommentInput({ onCommentSubmit }) {
  const [focus, setFocus] = useState(false);
  const mySubmitHandler = (e) => {
    onCommentSubmit(input);
    onSubmit(e);
  };
  const {
    input,
    isValid,
    onSubmit,
    onChangeHandler,
    onKeyDownHandler,
    inputLength,
  } = useMultilineInput(250, mySubmitHandler);
  const onFocusHandler = () => setFocus(true);
  const onBlurHandler = () => setFocus(false);

  return (
    <Box marginY={3}>
      <form noValidate onSubmit={mySubmitHandler}>
        <SCInput
          multiline
          maxRows={6}
          minRows={6}
          value={input}
          onChange={onChangeHandler}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onKeyDown={onKeyDownHandler}
          className={focus && 'focus'}
        />
        <Box mt={3} display="flex" justifyContent="space-between">
          <Text variant="caption">{inputLength}/250</Text>
          <NormalButton
            onClick={mySubmitHandler}
            color="secondary"
            variant="contained"
            disableRipple
            disabled={!isValid}
          >
            Post Comment
          </NormalButton>
        </Box>
      </form>
    </Box>
  );
}

export default CommentInput;
