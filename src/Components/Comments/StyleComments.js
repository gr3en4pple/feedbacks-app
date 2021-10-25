import {
  Button,
  Avatar,
  Typography,
  SvgIcon,
  CircularProgress,
  IconButton,
} from '@material-ui/core';
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';

export const wrapperVariants = {
  hide: {
    opacity: 0,
    x: '100vw',
  },
  show: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: '-100vw',
    transition: {
      ease: 'anticipate',
    },
  },
};

export const commentVariants = {
  hide: {
    opacity: 0,
    scaleY:0,
    originY:'100%',
    y:'20%',
    transition: {
      duration: 0.2,
    },
  },
  show: {
    opacity: 1,
    scaleY:1,
    originY:'100%',
    y:0,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
};

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${(props) => props.p && '2rem'};
  overflow: hidden;
  scroll-behavior: smooth;
`;

export const PageContent = styled.div`
  width: clamp(60%, 500px, 95%);
`;

export const ButtonsContent = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NormalButton = styled(Button)`
  text-transform: none;
`;

export const ReplyButton = styled.div`
  cursor: pointer;
  color: rgb(63, 81, 181);
  font-weight: 500;
  font-size: 14px;
  transition: 0.1s linear;
  &:hover {
    opacity: 0.8;
  }
`;

export const CommentsWrapper = styled.div`
  background: #fff;
  width: 100%;
  margin: 20px 0;
  border-radius: 10px;
`;

export const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;

  overflow: hidden;
  & > :last-child {
    & > .comment-reply {
      & > .bottom-divider {
        display: none;
      }
    }
  }
`;

export const Text = styled(Typography)`
  color: ${(props) => (props.bold ? 'rgb(55, 63, 104)' : '#647196')};
  font-weight: ${(props) => (props.bold ? 600 : 300)};
`;

export const StyledAvatar = styled(Avatar)`
  height: 40px;
  width: 40px;
`;

export const CommentText = styled(Text)`
  margin-top: 16px;
  font-weight: 400;
  word-break: break-word;
`;

export const CommentTag = styled(Typography)`
  font-weight: 500;
`;

export const SCInput = styled.input`
  width: 100%;
  background: rgb(242, 244, 255);
  outline: none;
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 16px;
  font-size: 16px;
  font-family: inherit;
  resize: none;
  box-sizing: border-box;
  color: #647196;
  height: 100%;
  transition: border-color 0.3s ease;
  &:focus {
    border: 1px solid rgb(58, 150, 238);
  }
  &.error {
    border: 1px solid red;
  }
`;

export const MultiRowsInput = styled.textarea`
  width: 100%;
  background: rgb(242, 244, 255);
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 16px;
  font-size: 16px;
  font-family: inherit;
  resize: none;
  box-sizing: border-box;
  color: #647196;
  height: 100%;
  ::placeholder {
    color: #647196;
    font-size: 14px;
  }
  ${(props) =>
    props.focusborder &&
    `border: 1px solid transparent;
    transition: border-color 0.3s ease;
    &:focus {
      border: 1px solid rgb(58, 150, 238);
    }
    &.error {
      border: 1px solid red;
    }
    `}
`;

export const MultiRowsForm = styled.form`
  /* height: 150px; */
  width: 100%;
  position: relative;
`;

export const MultiRowsWrapper = styled.div`
  margin: 20px 0 0 ${(props) => props.ml};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const DeleteButton = styled(IconButton)`
  align-self: flex-end;
  opacity: 0.7;
  padding: 0;
  transition: 0.12s linear;
  margin-bottom: 8px;
  &:hover {
    opacity: 1;
  }
  &:active {
    transform: scale(0.8);
  }
`;

const ReplySubmitWrapper = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
  transition: 0.2s linear;

  &.active {
    color: rgb(63, 81, 181);
    opacity: 0.8;
    cursor: pointer;
    &:hover {
      transform: scale(1.07);
      opacity: 1;
    }
  }
`;

export const LoadingCircle = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ReplySubmitBTN = ({ onSubmitClick, valid }) => {
  return (
    <ReplySubmitWrapper
      onClick={valid ? onSubmitClick : null}
      className={valid && 'active'}
    >
      <SvgIcon className="send-btn" fontSize="small">
        <SendIcon />
      </SvgIcon>
    </ReplySubmitWrapper>
  );
};

export const RepWrapper = styled.div`
  display: flex;
  margin-left: 16px;
  & > .side-divider {
    background: rgb(242, 244, 255);
  }
  & > .bottom-divider {
    left: 16px;
    bottom: -10px;
    background: rgb(242, 244, 255);
  }
`;

export const RepContainer = styled.div`
  padding-left: 30px;
  flex: 2;
`;
