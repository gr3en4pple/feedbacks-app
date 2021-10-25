import React from 'react';
import { SCInput } from '../Comments/StyleComments';
import useError from './useError';

const TitleInput = ({ titleError, onTitleChange, titleInput = ''}) => {
  const { error, onBlurHandler, onFocusHandler } = useError(
    titleError,
    titleInput
  );
  return (
    <SCInput
      onChange={(e) => {
        onTitleChange(e, e.target.value);
      }}
      value={titleInput}
      className={error && 'error'}
      onBlur={onBlurHandler}
      onFocus={onFocusHandler}
      data-name="titleInput"
      data-error="titleError"
    />
  );
};

export default TitleInput;
