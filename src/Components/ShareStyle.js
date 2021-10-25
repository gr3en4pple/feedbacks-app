import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export const NavWrapper = styled.div`
  border-radius: 10px;
  background: ${(props) =>
    props.linear
      ? `linear-gradient(
        to right,
        #3f92ef,
        #4989f4,
        #5c7df7,
        #7370f6,
        #8b5ff1,
        #b253e0,
        #ce48cd,
        #e33eb8,
        #f5539d,
        #fa6e8b,
        #f78984,
        #efa289
      );`
      : 'white'};
    box-shadow: 0 10px 10px 0px rgba(0,0,0,0.1);
    height:150px;
    margin-bottom: 20px;
`;

export const LogoBtn = styled.div`
  cursor: pointer;
`;

export const STypo = styled(Typography)`
  color: #fff;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
`;