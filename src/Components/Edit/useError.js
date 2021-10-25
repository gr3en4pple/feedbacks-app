import { useEffect, useState } from 'react';

const useError = (inputError, input) => {
  useEffect(() => {
    if (inputError) setError(true);
    else setError(false);
  }, [inputError]);
  const [error, setError] = useState(false);
  const onBlurHandler = (e) => ( !input.trim() ? setError(true) : null);

  const onFocusHandler = (e) => (error ? setError(false) : null);
  return { error, onBlurHandler, onFocusHandler };
};

export default useError;
