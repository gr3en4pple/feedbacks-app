import { useReducer } from 'react';

const reducer = (state, action) => {
  const { type, value, length } = action;
  switch (type) {
    case 'ON_CHANGE': {
      return {
        ...state,
        input: value,
        inputLength: length,
        isValid: !value.trim() || length > 250 ? false : true,
      };
    }

    case 'ON_SUBMIT': {
      return {
        ...state,
        input: '',
        inputLength: 0,
        isValid: false,
      };
    }

    default:
      throw new Error('what the fuck!');
  }
};

const initialState = {
  input: '',
  inputLength: 0,
  isValid: false,
};

const useMultilineInput = (maxlength, mySubmit) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { input, inputLength, isValid } = state;
  const onChangeHandler = (e) => {
    const text = e.target.value;
    const action = {
      type: 'ON_CHANGE',
      value: text,
      length: text.length,
    };
    dispatch(action);
    e.target.onkeypress = () => {
      return text.length >= maxlength ? false : null;
    };
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const action = { type: 'ON_SUBMIT' };
    dispatch(action);
  };
  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13 && e.shiftKey) return;
    if (e.keyCode === 13) {
      if (input === '' || !input.trim()) return;
      mySubmit(e);
    }
  };
  return {
    input,
    isValid,
    onSubmit,
    onChangeHandler,
    onKeyDownHandler,
    inputLength,
  };
};

export default useMultilineInput;
