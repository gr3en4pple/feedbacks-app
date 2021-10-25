import styled from 'styled-components';
import { Typography, Button } from '@material-ui/core';

import { Link } from 'react-router-dom';

export const dropdownVariants = {
  show: {
    scaleY: 1,
    originY: 0,
    y: 0,
    opacity: 1,
    
  },
  hide: {
    scaleY: 0,
    originY: 0,
    y: '-10%',
    opacity: 0,
    transition: {
     duration:0.25
    },
  },
};


export const HeaderWrapper = styled.header`
  background: rgb(55, 63, 104);
  border-radius: ${(props) => props.border};
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 20px;
  display: inline-block;
  width: 100%;
`;

export const Text = styled(Typography)`
  color: #fff;
  font-weight: ${(props) => props.weight};
  margin: 0;
  padding-right: 20px;
  @media (max-width: 500px) {
    padding: 0;
  }
`;

export const NormalButton = styled(Button)`
  text-transform: none;
  color: #fff;
  font-weight: 600;
`;

export const DropDown = styled.ul`
  position: absolute;
  background: #fff;
  padding: 0;
  margin: 0;
  top: 110%;
  color: black;
  list-style: none;
  transform-origin: 0 0;
  border-radius: 5px;
  overflow: hidden;
  width: 200px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  *:last-child {
    border-bottom: none;
  }
`;

export const Item = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  & > p {
    transition: 0.1s ease-in-out;
  }
  & > p:hover {
    color: rgb(125, 144, 238);
  }
`;

export const DashBoardWrapper = styled.div`
  padding: 1.5rem ${(props) => (props.pX ? '0.825rem' : 0)};
  box-sizing: border-box;
  width: 100%;
`;
