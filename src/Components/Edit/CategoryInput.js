import React, { forwardRef } from 'react';
import {
  dropdownVariants,
  itemVariants,
  SelectWrapper,
  SelectText,
  ExpandIcon,
  DropDownList,
  Text,
} from './StyleAdd';
import { AnimatePresence, motion } from 'framer-motion';
import useError from './useError.js';
const CategoryInput = ({
  contentArr,
  inputError,
  onCateClick,
  input,
  dataname,
  dataerror,
  isDrop,
  dropHandler,
 
},ref) => {
  const { error, onBlurHandler, onFocusHandler } = useError(inputError, input);
  const onClickHandler = (e) => {
    dropHandler(prev => !prev);
    onFocusHandler(e);
  };
  return (
    <SelectWrapper
      onClick={onClickHandler}
      tabIndex="0"
      onBlur={onBlurHandler}
      error={error}
      focus={isDrop}
      ref={ref}
    >
      <Text style={{ marginLeft: 16 }} component="span">
        {input}
      </Text>
      <SelectText readOnly />

      <ExpandIcon color="primary" className={isDrop && 'active'} />
      <AnimatePresence>
        {isDrop && (
          <DropDownList
            initial="hide"
            animate="show"
            exit="hide"
            variants={dropdownVariants}
            as={motion.ul}
          >
            {contentArr.map((element, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                onClick={(e) => onCateClick(e, element)}
                className={input === element ? 'active' : ''}
                data-error={dataerror}
                data-name={dataname}
              >
                {element}
              </motion.li>
            ))}
          </DropDownList>
        )}
      </AnimatePresence>
    </SelectWrapper>
  );
};

export default forwardRef(CategoryInput);
