export const inputReducer = (state, action) => {
  switch (action.type) {
    case 'ON_CHANGE': {
      return {
        ...state,
        [action.field]: action.value,
        [action.error]: false,
      };
    }
    case 'VALIDATE': {
      return {
        ...state,
        titleError: !state.titleInput.trim() ? true : false,
        detailError: !state.detailInput.trim() ? true : false,
        categoryError: !state.categoryInput.trim() ? true : false,
        statusError: !state.statusInput.trim() ? true : false,
      };
    }
    case 'EFFECT': {
      const newObj = action.newState;
      return {
        ...newObj,
      };
    }
    default:
      return state;
  }
};

export let initialInput = {
  titleInput: '',
  titleError: false,
  detailInput: '',
  detailError: false,
  categoryInput: '',
  categoryError: false,
  statusInput: '',
  statusError: false,
};
