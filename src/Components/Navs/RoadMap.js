import React from 'react';
import { NavWrapper } from '../ShareStyle';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { ReactComponent as Dot } from './black-circle.svg';
import { useContextState } from '../StateProvider';
import RoadmapItem from './RoadmapItem';
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SLink = styled(Link)`
  color: rgb(58, 150, 238);
  font-size: 14px;
`;

const Body = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const Item = styled.li`
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const StyledDot = styled(Dot)`
  margin-right: 12px;
  fill: ${(props) =>
    (props.inputcolor === 'Planned' && '#f49f85') ||
    (props.inputcolor === 'In-Progress' && '#ad1fea') ||
    (props.inputcolor === 'Live' && '#62bcfa')};
`;

export const Text = styled(Typography)`
  font-weight: ${(props) => props.weight};
`;

function RoadMap() {
  const {
    Feedbacks: { live, planned, inprogress },
    setMenu,
  } = useContextState();

  const roadMapArr = [
    {
      fbList: planned,
      title: 'Planned',
    },
    {
      fbList: inprogress,
      title: 'In-Progress',
      subtitle: 'Released features',
    },
    {
      fbList: live,
      title: 'Live',
    },
  ];
  return (
    <NavWrapper>
      <Content>
        <Header>
          <Typography style={{ color: '#333' }} variant="h6">
            Roadmap
          </Typography>
          <SLink to="/Roadmap" onClick={() => setMenu(false)}>
            View
          </SLink>
        </Header>
        <Body>
          {roadMapArr.map((content) => (
            <RoadmapItem key={content.title} content={content} />
          ))}
        </Body>
      </Content>
    </NavWrapper>
  );
}

export default RoadMap;
