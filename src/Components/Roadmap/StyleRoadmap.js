import styled from 'styled-components';
import { Button, Typography } from '@material-ui/core';

export const Wrapper = styled.div`
  padding: ${(props) => (props.pad ? '0 50px' : '0 0')};
  overflow: hidden;
`;
export const variants = {
  show: {
    scale: 1,
    opacity: 1,
  },
  hide: {
    scale: 0,
    opacity: 0,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export const SCButton = styled(Button)`
  padding: 0;
  color: #fff;
  text-transform: none;
  &:hover {
    transform: scale(0.97);
  }
`;

export const Title = styled(Typography)`
  font-weight: 600;
  color: rgb(55, 63, 104);
`;

export const Text = styled(Typography)`
  color: #8b95b0;
`;

export const NormalButton = styled(Button)`
  text-transform: none;
  font-size: 16px;
  
  @media(max-width: 400px) {
    font-size: 13px;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 3px;
    background: ${(props) =>
      (props.currentpage === 0 && '#f49f85') ||
      (props.currentpage === 1 && '#ad1fea') ||
      (props.currentpage === 2 && '#62bcfa')};
    bottom: 0;
    width: calc(100% / 3);
    transition: 0.35s linear;

    left: ${(props) => props.move}%;
  }
`;
export const FixedHeader = styled.div`
  position: sticky;
  top: 0;
  background: rgb(242, 244, 255);
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.1);
  height: 60px;
  width: 100%;
  z-index: 1000;
`;
