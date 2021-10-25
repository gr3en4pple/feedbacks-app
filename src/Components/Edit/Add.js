import React, { useEffect, useReducer, useState } from 'react';
import { withWidth, Box } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useContextState } from '../StateProvider';
import {
  popup,
  Wrapper,
  Content,
  Text,
  contentArr,
  InputWrapper,
  ArrowDownButton,
  CategoryArr,
  StatusArr,
} from './StyleAdd';
import SubmitButton from './SubmitButton';
import TitleInput from './TitleInput';
import DetailsInput from './DetailsInput';
import CategoryInput from './CategoryInput';
import { inputReducer, initialInput } from './InputReducer';
import { useClick } from '../ClickProvider';

function Add({ width }) {
  const { onFeedbackAdd, onFeedbackEdit, onFeedbackDelete, data } =
    useContextState();
  const { isCategoryDrop, cateDropHandler, isStatusDrop, statusDropHandler } =
    useClick();
  const { id } = useParams();
  const [emptyPage, setEmptyPage] = useState(false);
  useEffect(() => {
    if (id) {
      const feedback = data.find((element) => element.id === id);
      if (!feedback) setEmptyPage(true);
      else setEmptyPage(false);
      const newObj = {
        ...initialInput,
        titleInput: feedback?.title,
        detailInput: feedback?.content,
        categoryInput: feedback?.type,
        statusInput: feedback?.status,
      };
      dispatch({ type: 'EFFECT', newState: newObj });
    }
  }, [data, id]);

  const [inputState, dispatch] = useReducer(inputReducer, initialInput);
  const {
    titleInput,
    detailInput,
    categoryInput,
    titleError,
    detailError,
    categoryError,
    statusInput,
    statusError,
  } = inputState;
  const history = useHistory();
  const onChangeHandler = (e, value) => {
    const action = {
      type: 'ON_CHANGE',
      field: e.target.dataset.name,
      error: e.target.dataset.error,
      value: value,
    };
    dispatch(action);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (titleInput.trim() && detailInput.trim() && categoryInput.trim()) {
      if (id) {
        onFeedbackEdit(id, titleInput, detailInput, categoryInput, statusInput);
      } else {
        onFeedbackAdd(titleInput, detailInput, categoryInput);
      }
      history.goBack();
    } else {
      dispatch({ type: 'VALIDATE' });
    }
  };
  const onCancleHandler = (e) => {
    e.preventDefault();
    history.goBack();
  };

  const onDeleteHandler = (e) => {
    e.preventDefault();
    onFeedbackDelete(id);
    history.push('/');
  };

  return (
    <>
      {!emptyPage && (
        <Wrapper
          as={motion.div}
          variants={popup}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Content
            style={{
              marginTop: width === 'xs' || width === 'sm' ? '2rem' : 0,
            }}
          >
            <ArrowDownButton onBackHandler={onCancleHandler} />
            <Box mb={3}>
              <Text bold="true" variant="h5">
                {id ? 'Editing feedback' : 'Create New Feedback'}
              </Text>
            </Box>

            <form onSubmit={onSubmitHandler}>
              <InputWrapper content={contentArr[0]}>
                <TitleInput
                  titleError={titleError}
                  onTitleChange={onChangeHandler}
                  titleInput={titleInput}
                />
              </InputWrapper>
              <InputWrapper content={contentArr[1]}>
                <CategoryInput
                  contentArr={CategoryArr}
                  input={categoryInput}
                  onCateClick={onChangeHandler}
                  inputError={categoryError}
                  dataname="categoryInput"
                  dataerror="categoryError"
                  isDrop={isCategoryDrop}
                  dropHandler={cateDropHandler}
                />
              </InputWrapper>
              {id && (
                <InputWrapper content={contentArr[2]}>
                  <CategoryInput
                    contentArr={StatusArr}
                    input={statusInput}
                    onCateClick={onChangeHandler}
                    inputError={statusError}
                    dataname="statusInput"
                    dataerror="statusError"
                    isDrop={isStatusDrop}
                    dropHandler={statusDropHandler}
                  />
                </InputWrapper>
              )}

              <InputWrapper content={contentArr[3]}>
                <DetailsInput
                  detailError={detailError}
                  onDetailChange={onChangeHandler}
                  detailInput={detailInput}
                />
              </InputWrapper>

              <SubmitButton
                id={id}
                onCancleHandler={onCancleHandler}
                onSubmitHandler={onSubmitHandler}
                onDeleteHandler={onDeleteHandler}
              />
            </form>
          </Content>
        </Wrapper>
      )}
    </>
  );
}

export default withWidth()(Add);
