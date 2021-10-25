import React from 'react';
import { MultiRowsInput } from '../Comments/StyleComments';
import useError from './useError';
const DetailsInput = ({ detailError, onDetailChange, detailInput }) => {
  const { error, onBlurHandler, onFocusHandler } = useError(
    detailError,
    detailInput
  );
  return (
    <MultiRowsInput
      onChange={(e) => onDetailChange(e, e.target.value)}
      onBlur={onBlurHandler}
      onFocus={onFocusHandler}
      className={error && 'error'}
      value={detailInput}
      rows="5"
      focusborder
      data-name="detailInput"
      data-error="detailError"
    />
  );
};

export default DetailsInput;
