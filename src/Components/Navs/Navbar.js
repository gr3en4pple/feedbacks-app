import { Grid, SvgIcon } from '@material-ui/core';
import React from 'react';
import ButtonsInterface from './ButtonsInterface';
import Logo from './Logo';
import RoadMap from './RoadMap';
import { withWidth } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import { NavWrapper, LogoBtn, STypo } from '../ShareStyle';
import { useContextState } from '../StateProvider';

const LargeMedium = () => {
  return (
    <Grid item container lg={3} md sm xs spacing={2}>
      <Grid item lg={12} md={4} sm={4} xs={4}>
        <Logo />
      </Grid>

      <Grid item lg={12} md={4} sm={4} xs={4}>
        <ButtonsInterface />
      </Grid>

      <Grid item lg={12} md={4} sm={4} xs={4}>
        <RoadMap />
      </Grid>
    </Grid>
  );
};
const MobileWrapper = styled(NavWrapper)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  margin: 0;
  padding: 0 20px;
  border-radius: 0;
`;

const MenuBTN = styled.div`
  cursor: pointer;
`;

const MobileScreen = () => {
  const { onMenuHandler } = useContextState();

  return (
    <Grid item container>
      <MobileWrapper linear>
        <LogoBtn>
          <STypo weight="600" variant="h6">
            Frontend Mentor
          </STypo>
          <STypo weight="400" variant="caption">
            Feedback Board
          </STypo>
        </LogoBtn>

        <MenuBTN onClick={onMenuHandler}>
          <SvgIcon htmlColor="white" fontSize="large">
            <MenuIcon />
          </SvgIcon>
        </MenuBTN>
      </MobileWrapper>
    </Grid>
  );
};

function Navbar({ width }) {
  return (
    ((width === 'lg' || width === 'md') && <LargeMedium />) ||
    ((width === 'sm' || width === 'xs') && <MobileScreen />)
  );
}

export default withWidth()(Navbar);
