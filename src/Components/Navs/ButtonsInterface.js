import React from 'react';
import styled from 'styled-components';
import { NavWrapper } from '../ShareStyle';
import classNames from 'classnames';
import { useContextState } from '../StateProvider';

const textArr = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];
const Wrapper = styled(NavWrapper)``;

const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const InterfaceBTN = styled.div`
  padding: 4px 16px;
  margin: 10px 8px 0 0;
  color: rgb(80, 105, 231);
  background: rgb(242, 244, 255);
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s linear;
  font-weight: 500;
  font-size: 14px;

  &:hover {
    background: rgba(70, 97, 230, 0.7);
    color: #fff;
  }
  &.active {
    background: rgb(70, 97, 230);
    color: white;
  }
`;
function ButtonsInterface() {
  const { setTypeHandler, type } = useContextState();
  return (
    <Wrapper>
      <Content>
        {textArr.map((typeText, index) => (
          <InterfaceBTN
            className={classNames({ active: type === typeText })}
            onClick={(e)=>setTypeHandler(e,typeText)}
            key={index}
          >
            {typeText}
          </InterfaceBTN>
        ))}
      </Content>
    </Wrapper>
  );
}

export default ButtonsInterface;
