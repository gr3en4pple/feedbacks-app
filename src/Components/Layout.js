import React from 'react';
import styled from 'styled-components';
import Menu from './Navs/Menu';
import { useLocation } from 'react-router';
import { useClick } from './ClickProvider';
import useFirestore from './useFirestore';
import { CircularProgress } from '@material-ui/core';


const Wrapper = styled.div`
  min-height: 100vh;
  background: rgb(242, 244, 255);
`;

function Layout({ children }) {
  const { onLayoutClickHanlder } = useClick();
  const [data, isLoading] = useFirestore();
  return (
    <Wrapper onClick={onLayoutClickHanlder}>
      {isLoading && <CircularProgress className="center" />}
      {children}
      <Menu />
      
     
    </Wrapper>
  );
}

export default Layout;
