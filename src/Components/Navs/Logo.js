import {  } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { NavWrapper, LogoBtn, STypo } from '../ShareStyle';
const LinearBackGround = styled(NavWrapper)`
  display: flex;
  align-items: flex-end;
`;

const LogoWrapper = styled.div`
  padding: 20px;
`;

function Logo() {
  return (
    <LinearBackGround linear>
      <LogoWrapper>
        <LogoBtn>
          <STypo weight="600" variant="h6">
            Frontend Mentor
          </STypo>
          <STypo weight="400" variant="caption">
            Feedback Board
          </STypo>
        </LogoBtn>
      </LogoWrapper>
    </LinearBackGround>
  );
}

export default Logo;
