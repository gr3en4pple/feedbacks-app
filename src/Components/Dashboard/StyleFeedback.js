import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { InterfaceBTN } from '../Navs/ButtonsInterface';

export const FeedbackWrapper = styled.div`
  cursor: pointer;
  transition: 0.2s ease;
  min-height: 120px;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  &:hover {
    transform: scale(1.01);
  }
  ${(props) =>
    props.roadmap &&
    `position:relative;
  
  &::before {
    content:'';
    position:absolute;
    
    width:100%;
    height:6px;
    top:0;
    left:0;
    border-radius: 10px 10px 0 0;
  }`}

  &::before {
    background: ${(props) =>
      (props.roadmap === 'Planned' && '#f49f85') ||
      (props.roadmap === 'In-Progress' && '#ad1fea') ||
      (props.roadmap === 'Live' && '#62bcfa')};
  }
`;
export const FeedbackInner = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const FeedbackContent = styled.div`
  display: flex;
  width: 90%;
`;

export const Content = styled.div``;

export const FeedbackComments = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const STypo = styled(Typography)`
  font-weight: 500;
`;

export const UpvoteBTN = styled(InterfaceBTN)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
  margin-right: 20px;
`;

export const Title = styled(Typography)`
  font-weight: 500;
  color: rgb(55, 63, 104);
  word-break: break-word;
  overflow: hidden;
  ${(props) =>
    props.ellipsis &&
    ` 
  white-space: initial;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  `}
`;

export const Text = styled(Typography)`
  color: ${(props) => (props.black ? 'rgb(55, 63, 104)' : '#8b95b0')};
  word-break: break-word;
  min-height: ${(props) => props.minheight};
  font-weight: ${(props) => props.bold && 700};

  margin: ${(props) => props.m};
  ${(props) =>
    props.ellipsis &&
    `overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @supports (-webkit-line-clamp: 2) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }`}
`;

export const Type = styled(InterfaceBTN)`
  margin: 0;
  display: inline-block;
  &:hover {
    color: rgb(80, 105, 231);
    background: rgb(242, 244, 255);
  }
  font-weight: 600;
`;
