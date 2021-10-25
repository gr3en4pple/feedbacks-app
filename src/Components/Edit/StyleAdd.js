import {
  IconButton,
  InputBase,
  Typography,
  Button,
  SvgIcon,
  Box,
} from '@material-ui/core';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ArrowDownwardSharpIcon from '@material-ui/icons/ArrowDownwardSharp';

export const popup = {
  hidden: {
    y: '100vh',
    opacity: 0,
    transition: {
      ease: 'anticipate',
      duration: 0.3,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeInOut',
    },
  },
};

export const dropdownVariants = {
  hide: {
    scaleY: 0,
    originY: 0,
  },
  show: {
    scaleY: 1,
    originY: 0,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

export const itemVariants = {
  hide: {
    x: '-20%',
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width:400px;
  width: clamp(400px, 500px, 80%);
  border-radius: 10px;
  background: #fff;
  position: relative;
  padding: 40px 20px;
 
`;

export const SCIconButton = styled(IconButton)`
  position: absolute;
  right: 50%;
  top: -25px;
  transform: translateX(50%);
  background: rgba(255, 255, 255, 0.7);
  z-index: 1000;
`;

export const SCInput = styled(InputBase)`
  font-size: 16px;
  outline: none;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0);
  transition: border-color 0.2s ease;
  border-radius: 10px;
  & > .MuiInputBase-input {
    border-radius: 10px;
    padding: 16px;
    background: rgb(242, 244, 255);
  }
  &.MuiInputBase-multiline {
    padding: 0;
  }
  &.error {
    border-color: red;
  }
  &.focus {
    border-color: rgb(58, 150, 238);
  }
`;

export const SelectWrapper = styled.div`
  line-height: 1.1875em;
  border-radius: 10px;
  background: rgb(242, 244, 255);
  outline: none;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: border 0.2s linear;
  border: 1px solid rgba(0, 0, 0, 0);
  ${(props) => props.focus && `border-color:rgb(58,150,238)`};
  ${(props) => props.error && `border-color:red`};
  
`;

export const SelectText = styled.input`
  font-size: 16px;
  padding: 16px;
  background: inherit;
  outline: none;
  border: none;
  cursor: inherit;
  width:100%;
  border-radius:10px;
  
`;

export const ExpandIcon = styled(ExpandMoreOutlinedIcon)`
  transition: 0.2s ease;
  position: absolute;
  right: 10px;
  &.active {
    transform: rotate(-180deg);
  }
`;

export const DropDownList = styled.ul`
  list-style: none;
  position: absolute;
  top: calc(100% + 8px);
  background: white;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  & > li {
    border-bottom: 1px solid #e4e4e4;
    padding: 8px;
    transition: color 0.2s linear;
    &.active {
      color: rgb(63, 81, 181);
      font-weight: 500;
    }
    &:hover {
      color: rgba(63, 81, 181, 0.8);
    }
  }
  &:last-child {
    border: none;
  }
`;

export const Text = styled(Typography)`
  color: rgb(58, 67, 116);
  font-weight: ${(props) => (props.bold ? 600 : 400)};
  width:100%;
`;

const SCButton = styled(Button)`
  text-transform: none;
  background: ${(props) => props.background};
`;

export const contentArr = [
  {
    title: 'Feedback title',
    subtitle: 'Add a short, descriptive headline',
  },
  {
    title: 'Category',
    subtitle: 'Choose a category for your feedback',
  },
  {
    title:'Update status',
    subtitle:'Change feature state'
  },
  {
    title: 'Feedback Details',
    subtitle:
      'Include any specific comments on what should be improved, added, etc.',
  },
];

export const CategoryArr = ['UI', 'UX', 'Enhancement', 'Feature', 'Bug'];
export const StatusArr = ['Suggestion','Planned','In-Progress','Live'];

export const MotionButton = ({ ...props }) => {
  return (
    <SCButton
      component={motion.button}
      whileTap={{ scale: 0.95 }}
      disableRipple
      disableElevation
      {...props}
    ></SCButton>
  );
};
export const ArrowDownButton = ({ onBackHandler }) => (
  <SCIconButton color="primary" onClick={onBackHandler}>
    <SvgIcon fontSize="large">
      <ArrowDownwardSharpIcon />
    </SvgIcon>
  </SCIconButton>
);

export const InputWrapper = ({ content, children }) => (
  <Box pb={2}>
    <Box pb={2}>
      <Text bold="true" variant="body2">
        {content.title}
      </Text>
      <Text variant="body2"> {content.subtitle}</Text>
    </Box>
    {children}
  </Box>
);