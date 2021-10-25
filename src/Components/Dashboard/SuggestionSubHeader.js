import React from 'react';
import { Box, SvgIcon, Typography, withWidth } from '@material-ui/core';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import CheckIcon from '@material-ui/icons/Check';
import { ReactComponent as Bulb } from './bulb.svg';
import {
  dropdownVariants,
  Text,
  NormalButton,
  DropDown,
  Item,
} from './StyleDashBoard';
import { useContextState } from '../StateProvider';
import { useClick } from '../ClickProvider';
const SuggestionSubHeader = ({ width }) => {
  const { Feedbacks:{suggestion}, sortHandler, sort } = useContextState();
  const { isSortDrop, sortDropHandler } = useClick();

  const dropdownText = [
    'Most Upvotes',
    'Least Upvotes',
    'Most Comments',
    'Least Comments',
  ];

  return (
    <Box display="flex" alignItems="center">
      {width !== 'xs' && (
        <>
          <Bulb style={{ paddingRight: 20 }} />
          <Text weight="600" variant="h6">
            {suggestion.length} Suggestion
          </Text>
        </>
      )}

      <Text weight="400" variant="subtitle2">
        Sort by:
      </Text>
      <div className="dropdown-list">
        <NormalButton
          onClick={sortDropHandler}
          disableRipple
          endIcon={
            <ExpandMoreOutlinedIcon
              className={classNames('icon', { flip: isSortDrop })}
            />
          }
        >
          {sort}
        </NormalButton>
        <AnimatePresence>
          {isSortDrop && (
            <DropDown
              as={motion.ul}
              initial="hide"
              animate="show"
              exit="hide"
              variants={dropdownVariants}
            >
              {dropdownText.map((sortText, index) => (
                <Item
                  className="dropdown-item"
                  key={index}
                  onClick={(e) => sortHandler(e, sortText)}
                >
                  <Typography color={sort === sortText ? 'primary' : 'inherit'}>
                    {sortText}
                  </Typography>
                  {sort === sortText && (
                    <SvgIcon
                      component={motion.svg}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring' }}
                      color="primary"
                    >
                      <CheckIcon />
                    </SvgIcon>
                  )}
                </Item>
              ))}
            </DropDown>
          )}
        </AnimatePresence>
      </div>
    </Box>
  );
};
export default withWidth()(SuggestionSubHeader);
