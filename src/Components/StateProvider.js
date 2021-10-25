import React, { useContext, useState, useEffect, useReducer } from 'react';
import { withWidth } from '@material-ui/core';
import useFirestore, {
  addFeedback,
  deleteFeedback,
  updateFeedback,
} from './useFirestore';
const ContextAPI = React.createContext();

const initialState = {
  suggestion: [],
  live: [],
  planned: [],
  inprogress: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'MAP_DATA':
      return {
        ...state,
        suggestion: action.suggestion,
        live: action.live,
        planned: action.planned,
        inprogress: action.inprogress,
      };

    default:
      throw new Error('Type not found');
  }
};

export const useContextState = () => useContext(ContextAPI);

function StateProvider({ children, width }) {
  const [Feedbacks, dispatch] = useReducer(reducer, initialState);
  const [type, setType] = useState('All');
  const [isMenuOpen, setMenu] = useState(false);
  const [sort, setSort] = useState('Most Upvotes');
  const [data, isLoading] = useFirestore(sort);

  useEffect(() => {
    if (width === 'lg' || width === 'md') setMenu(false);

    isMenuOpen
      ? document.getElementsByTagName('html')[0].classList.add('noscroll')
      : document.getElementsByTagName('html')[0].classList.remove('noscroll');

    const action = {
      type: 'MAP_DATA',
      suggestion: data.filter((element) => element.status === 'Suggestion'),
      planned: data.filter((element) => element.status === 'Planned'),
      live: data.filter((element) => element.status === 'Live'),
      inprogress: data.filter((element) => element.status === 'In-Progress'),
    };
    dispatch(action);
  }, [width, isMenuOpen, data]);
  const onMenuHandler = () => {
    setMenu((prev) => !prev);
  };
  const sortHandler = (e, newSort) => {
    e.stopPropagation();
    if (sort !== newSort) setSort(newSort);
  };
  const setTypeHandler = (e, newType) => {
    setType(newType);
  };
  const upvoteHandler = async (e, id) => {
    e.preventDefault();
    let feedback = data.find((element) => element.id === id);
    const newUpvote = feedback.isClick
      ? feedback.upvote - 1
      : feedback.upvote + 1;
    const newObj = {
      isClick: !feedback.isClick,
      upvote: newUpvote,
    };
    updateFeedback(newObj, id);
  };

  const onFeedbackAdd = async (title, content, type) => {
    // const newID = Math.random().toString(36).substr(2, 7);
    const newFeedback = {
      title: title,
      type: type,
      content: content,
      isClick: false,
      upvote: 0,
      status: 'Suggestion',
      commentList: [],
      totalComments: 0,
    };

    addFeedback(newFeedback);
  };

  const onFeedbackEdit = (id, newTitle, newContent, newType, newStatus) => {
    const newObj = {
      title: newTitle,
      type: newType,
      content: newContent,
      status: newStatus,
    };
    updateFeedback(newObj, id);
  };

  const onFeedbackDelete = (id) => {
    deleteFeedback(id);
  };
  const value = {
    type,
    setTypeHandler,
    sort,
    sortHandler,
    Feedbacks,
    data,
    upvoteHandler,
    isMenuOpen,
    onMenuHandler,
    onFeedbackAdd,
    isLoading,
    onFeedbackEdit,
    onFeedbackDelete,
    setMenu
  };
  return <ContextAPI.Provider value={value}>{children}</ContextAPI.Provider>;
}

export default withWidth()(StateProvider);
