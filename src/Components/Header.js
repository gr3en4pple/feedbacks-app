import React from 'react';
import '../App.css';
import { HeaderWrapper, NormalButton } from './Dashboard/StyleDashBoard';
import { withWidth } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
`;
function Header({ width, OptionComponent, sticky }) {
  return (
    <HeaderWrapper sticky={sticky} 
    border={width === 'lg' || width === 'md' ? '5px' : 0}
    
    >
      {OptionComponent}
      <StyledLink to="/add">
        <NormalButton
          size={width === 'xs' ? 'small' : 'medium'}
          color="secondary"
          variant="contained"
        >
          + Add Feedback
        </NormalButton>
      </StyledLink>
    </HeaderWrapper>
  );
}

export default withWidth()(Header);
